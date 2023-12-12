import axios from 'axios';


export const sendMessage = async (dataText) => {
    try {
      const botToken = '6862695559:AAFDhuQ0d82rpjHKN8381xmxsTJ74IBgwos';
      const chatIds = ['525377297','425357486', '433212231'];
      const sendMessagePromises = chatIds.map(async chatId => {
        return axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: dataText,
        });
      });
  
      await Promise.all(sendMessagePromises);
    } catch (error) {
      console.error('Axios Error:', error.message);
    }
  };
  