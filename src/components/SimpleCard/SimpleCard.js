import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from '@material-ui/icons/Share';



function SimpleCard(props) {
  const { avatarUrl, title, subtitle, description, imgUrl} = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style= {{height:"150px"}} image={imgUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY MORE</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;