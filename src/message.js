import React , { forwardRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './message.css';

const Message = forwardRef(({text , Usernam} , ref) => {
  const isUser = Usernam === text.username;
    return(
      <div ref={ref} className={`message ${isUser && 'message__user'}`}> 
        <Card className={isUser ? "message__usercard" : "message__guestcard"}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {!isUser && `${text.username || 'Unkown User'}: `} {text.text}
            </Typography>
          </CardContent>
        </Card>

      </div>
    
  );
    });

export default Message