export default function GetURL(phone, message){

    const parsedMessage = encodeURIComponent(message);

    return ('https://api.whatsapp.com/send?phone=' + phone + '&text=' + parsedMessage)
}