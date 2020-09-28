'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();
var encoding = require("encoding");



app.set('port', (process.env.PORT || 5000)) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
var Token = process.env.TOKEN;
//var WebDF = process.env.WebDF;

var access_token = 'Bearer {'+Token+'}'
var name = "";

app.get('/', (req, res) => {
  res.end("ok")
})



app.post('/webhook', (req, res) => {

    var data = req.body; 
console.log('-----ปริ้นทั้งหมด-----' + JSON.stringify(data));
    
//console.log('++++'+JSON.stringify(req.body.events));
    
    var sende_r = req.body.events[0].source.userId
    var reToken = req.body.events[0].replyToken
    
    var data = req.body; 
    
    if (req.body.events[0].type == "message") { 
    if (req.body.events[0].message.type == "text") {
     
     var tex_t = req.body.events[0].message.text
     
        //profile(reToken, sende_r); 
     
     postToDialogflow(req);

     }
        
     }else if (req.body.events[0].type == "beacon") {  
     if (req.body.events[0].beacon.type == "enter") {   
        
     var beacon_id = req.body.events[0].beacon.hwid  
       //  if(beacon_1 == "0133a0751f"){
       //  profile(reToken, sende_r);    
       //  }else if(beacon_1 == "0133a0751f"){
       //  profile(reToken, sende_r);    
       //  } 
       profile(reToken, sende_r, beacon_id);  
       console.log("---enter---" + sende_r+"-------"+beacon_id);  
     }
 }
 
 
 })
 
 
 /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


function data_enter(sende_r, beacon_id) {


   var checktime = "https://script.google.com/macros/s/AKfycbzatcZVRzfAu5VMRRarvToWQDhCl9rZZt1DSKAXJWDvnFFjPg/exec?userId="+sende_r+"&beaconid="+beacon_id;
 request(checktime, function (error, response, body) {

})


}





// เช็คโปรไฟล์
/////////////////////////////////////////////////////////////////////////

function profile(reToken,sende_r, beacon_id) {

    var headers = {
       'Authorization' : access_token
}
    

var options = {
    url: 'https://api.line.me/v2/bot/profile/'+sende_r,
    method: 'GET',
    headers: headers,
    }

 request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        name = info.displayName;
        
          if(beacon_id == "01434bd81e"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดตรวจโซนออฟฟิสตลาดของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"

          }; 
        reply(reToken, msg, sende_r, beacon_id);    
         }else if(beacon_id == "014344dc6d"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดตรวจร้านทุกอย่าง 20 บาทของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
         
        else if(beacon_id == "0143465073"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดตรวจกาแฟพันธุ์ไทยของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "014346d3a0"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดตรวจแผงตลาดด้านหลังโซนฟู้ดคอร์ทของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "0143476a42"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดตรวจสุขาของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "014348d439"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดตรวจแผงตลาดด้านหลังโซนเสี่ยต้นหมูสดของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "013762420d"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "013766da70"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "0137697c25"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        else if(beacon_id == "01376f1393"){
         var msg = {
           "type": "text",
           "text": "ระบบได้บันทึกการตรวจจุดของ"+" " +name +" " + "ไว้เรียบร้อยแล้ว"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
        
        
        
    }
 })


}

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


function reply(reToken, msg, sende_r, beacon_id) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': access_token
    }
    let body = JSON.stringify({
        replyToken: reToken,
        messages: [msg]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }
)
    console.log("---data_enter---" + sende_r+"-------"+beacon_id);
data_enter(sende_r, beacon_id);
}

const postToDialogflow = req => {
    
  var WebDF = "https://bots.dialogflow.com/line/9c6a1598-acdd-4693-929d-29ccb36a541f/webhook";
  req.headers.host = "bots.dialogflow.com";
  return request({
    method: "POST",
    uri: WebDF ,
    headers: req.headers,
    body: JSON.stringify(req.body)
    
  });
 
};

