import { Notification } from "./Notification"

export function AbaNotification(){
    

    return(
      <>
        <Notification icone="fab fa-twitter" colorIcone="blue" warning="+ 4" colorWarning="danger" >
          Followers
        </Notification>
        <Notification icone="fa fa-comment" colorIcone="pink" warning="+ 6" colorWarning="primary" >
          New Comments
        </Notification>
        <Notification icone="fa fa-shopping-cart" colorIcone="success" warning="+ 7" colorWarning="success" >
          New Orders
        </Notification>
        <Notification icone="far fa-clock" colorIcone="purple" warning="" colorWarning="" >
        Finished processing data!
        </Notification>
      </>

    )
}