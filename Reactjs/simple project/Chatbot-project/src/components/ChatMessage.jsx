import computer from '../assets/computer.png'
import user from '../assets/user.png'

export function ChatMessage({ message, sender }) {
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
            (sender === "user")
                ? "user-chat"
                : "robot-chat"
        }>
            {sender === 'robot' && (
                <img src={computer} className="img-style" />
            )}
            <div className="message">{message}</div>
            {sender === 'user' && (
                <img src={user} className="img-style" />
            )}
        </div>
    );
}