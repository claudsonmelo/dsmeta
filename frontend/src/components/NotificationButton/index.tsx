import icon from "../../assets/img/notification-icon.svg";
import axios from "axios";
import "./styles.css";
import toast from "react-toastify";

type Props = {
  saleId: number;
};

function handleClick(saleIdentif: number) {
  axios("${BASE_URL}/sales/${saleIdentif}/notification").then((response) => {
    //console.log("SUCESSO!");
    toast.toast.info("SMS enviado com sucesso!");
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
