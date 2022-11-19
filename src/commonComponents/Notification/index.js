import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

function Notification(type, message) {
  return () => {
    switch (type) {
      case "info":
        NotificationManager.info(message);
        break;
      case "success":
        NotificationManager.success(message);
        break;
      case "warning":
        NotificationManager.warning(message);
        break;
      case "error":
        NotificationManager.error(message);
        break;
      default:
        break;
    }
  };
}

export default Notification;
