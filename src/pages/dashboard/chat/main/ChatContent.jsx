import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Avatar, Button, Input, Layout } from 'antd'
import { userStore } from '@/utils/zustand.js'
import moment from 'moment'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { io } from 'socket.io-client'
import { debounce } from 'lodash'

const { Content } = Layout
const ChatContent = ({ updateList, messages, setContactList, selectedContact }) => {
  // Initial message data
  const { userName, language } = userStore((state) => state)
  const [newMessage, setNewMessage] = useState('')
  const [chatServer, setChatServer] = useState()
  const token = userStore((state) => state?.token)

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('')
      chatServer?.emit('sendMessageToUser', {
        content: newMessage,
        chatId: selectedContact?.id,
      })
    }
  }

  const initiateSocket = debounce(() => {
    if (chatServer?.connected) {
      chatServer?.close()
      chatServer?.removeAllListeners()
    }
    const newSocket = io(socketServerAddress, {
      withCredentials: true,
      transports: ['websocket'],
      query: {
        token: token,
        lang: 'uz',
      },
    })

    newSocket.on('connect', () => {
      newSocket.on('onSuccessSentMessage', updateList)
      newSocket.on('onNewMessageFromUser', updateList)
      newSocket.on('onNewChatCreated', (newChat) => {
        setContactList((prev) => [newChat, ...prev])
      })
      setChatServer(newSocket)
    })
  }, 1000)

  useEffect(() => {
    if (!chatServer?.connected) {
      initiateSocket()
    }
  }, [token])

  useEffect(() => {
    if (selectedContact?.id)
      setNewMessage(localStorage?.getItem('setNewMessage' + selectedContact?.id?.toString()) || '')
  }, [selectedContact?.id])

  useEffect(() => {
    if (selectedContact?.id) {
      localStorage.setItem('setNewMessage' + selectedContact?.id?.toString(), newMessage || '')
    }
  }, [newMessage])
  // Search query state
  const chatContainerRef = useRef(null)

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages])
  // Scroll to the bottom of the chat when a new message is added

  return (
    <Content className="p-6 bg-gray-100 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center mb-4">
        <Avatar size={48} icon={<UserCircleIcon />} />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{selectedContact?.user?.name}</h2>
          <span className="text-gray-500">{selectedContact?.user?.phoneNumber}</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="chat-container overflow-y-auto bg-white p-4 rounded-lg shadow-sm h-96 flex-grow"
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex  ${
              message.sender === userName || message?.isAutoRespondMessage
                ? 'justify-end'
                : message?.sender === 'system'
                ? 'justify-center'
                : 'justify-start'
            } mb-4`}
          >
            <div
              className={`px-3 py-1 rounded-2xl max-w-xs ${
                message.sender === userName ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {message?.isAutoRespondMessage && <div className={'text-blue-400'}>faq:</div>}
              <p>{message.text}</p>
              {message?.sender !== 'system' && (
                <span className="text-xs text-gray-400">
                  {moment(message.time).locale(language).format('HH:mm')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex items-center mt-4">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Введите ваше сообщение..."
          className="flex-grow mr-2 resize-none h-10"
          onPressEnter={handleSendMessage}
        />
        <Button className={'h-10 bg-indigo-600 text-white'} onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </Content>
  )
}

export default ChatContent
