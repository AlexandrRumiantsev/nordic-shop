export function telegramBot(text: string){

    //bot - inordic050223
    //name - inordic050223_bot
    //Use this token to access the HTTP API:
    //5612987931:AAEPM-thFG95wRraVCg_vtJ-G9R9z84CFzI

    const bot_token = '5612987931:AAEPM-thFG95wRraVCg_vtJ-G9R9z84CFzI'
    const url_api_telegram = `https://api.telegram.org/bot${bot_token}`;

    const adminsArray: any = {
        'Александр': 524721402
    }

    fetch(`${url_api_telegram}/sendMessage?chat_id=${adminsArray['Александр']}&text=${text}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(() => {
        alert('Сообщение отправлено админинистратору')
    })

}