import { useState, useRef,useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ChatInput({ chatMessages, setChatMessages }) {
            const [inputText, setInputText] = useState('');

            function saveInputText(event) {
                setInputText(event.target.value);
            }

            function sendMessage() {
                const newChatMessages = [
                    ...chatMessages,
                    {
                        message: inputText,
                        sender: 'user',
                        id: crypto.randomUUID()
                    }
                ];

                setChatMessages(newChatMessages);

                const response = Chatbot.getResponse(inputText);
                setChatMessages([
                    ...newChatMessages,
                    {
                        message: response,
                        sender: 'robot',
                        id: crypto.randomUUID()
                    }
                ]);

                setInputText('');
                   
               
            }
            
             const enterToSubmit=(e) => {
                    if(e.key==="Enter"){
                        sendMessage();
                    }
                };
                
            return (
                <div className="head-container">
                    <input className="input-area"
                        placeholder="Send a message to Chatbot"
                        size="30"
                        onChange={saveInputText}
                        value={inputText}
                        onKeyDown={enterToSubmit}
                    />
                    <button className="send-button"
                        onClick={sendMessage}
                    >Send</button>
                </div>
            );
        }

        function ChatMessage({ message, sender }) {
            // const message = props.message;
            // const sender = props.sender;
            // const { message, sender } = props;

            /*
            if (sender === 'robot') {
              return (
                <div>
                  <img src="robot.png" width="50" />
                  {message}
                </div>
              );
            }
            */

            return (
                <div className={
                    (sender==="user")
                    ?"user-chat"
                    :"robot-chat"
                }>
                    {sender === 'robot' && (
                        <img src="./pngs/computer.png" className="img-style"/>
                    )}
                    <div className="message">{message}</div>
                    {sender === 'user' && (
                        <img src="./pngs/user.png"  className="img-style"/>
                    )}
                </div>
            );
        }

        function ChatMessages({ chatMessages }) {
            const messageref= useRef(null);
            useEffect(() => {
                const elementref= messageref.current;
                if(elementref){
                    elementref.scrollTop=elementref.scrollHeight;
                }
            },[chatMessages]);

            return (
                <div className="chatmessage-container" ref={messageref}>
                    {chatMessages.map((chatMessage) => {
                        return (
                            <ChatMessage
                                message={chatMessage.message}
                                sender={chatMessage.sender}
                                key={chatMessage.id}
                            />
                        );
                    })}
                </div>
            );
        }


function App() {
            const [chatMessages, setChatMessages] =useState([{
                message: 'hello chatbot',
                sender: 'user',
                id: 'id1'
            }, {
                message: 'Hello! How can I help you?',
                sender: 'robot',
                id: 'id2'
            }, {
                message: 'can you get me todays date?',
                sender: 'user',
                id: 'id3'
            }, {
                message: 'Today is September 27',
                sender: 'robot',
                id: 'id4'
            }]);
            // const [chatMessages, setChatMessages] = array;
            // const chatMessages = array[0];
            // const setChatMessages = array[1];

            return (
                <div className="main-container">
                    
                    <ChatMessages
                        chatMessages={chatMessages}
                    />

                    <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />

                </div>
            );
        }

export default App
