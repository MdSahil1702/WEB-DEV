 import {  useRef,useEffect } from 'react'
 import { ChatMessage } from './ChatMessage';
 
 export default function ChatMessages({ chatMessages }) {
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