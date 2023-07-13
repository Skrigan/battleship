// import { WebSocket, WebSocketServer } from 'ws';
// import { Reg, RegReqData, UserInfo } from './modules/interfaces.js';

// // import path from 'node:path';
// // import { fileURLToPath } from 'url';
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// let index = 0;
// let roomId = 0;

// const users: Map<string, UserInfo> = new Map();
// const rooms: 

// setInterval(() => {
//   // console.log(index);
//   // updateWinners();
// }, 4000);

// // setInterval(() => {
// //   console.log(users.keys());
// // }, 4000);

// const PORT = Number(process.env.PORT || 3000);
// console.log(`Server started on ${PORT} port`);

// const server = new WebSocketServer({
//   port: PORT,
// });

// server.on('connection', (ws) => {
//   ws.on('message', (message: any) => {
//     const req = JSON.parse(message);
//     console.log(req);
//     switch (req.type) {
//       case 'reg':
//         reg(ws, req);
//       case 'create_room':
//       case 'add_user_to_room':
//       case 'add_ships':
//       case 'start_game':
//       case 'attack':
//       case 'randomAttack':
//     }
//     // if (clie)
//     // console.log(String(message))
//   });
// });

// function reg(ws: WebSocket, req: Reg) {
//   const regReqData: RegReqData = JSON.parse(req.data);
//   if (users.has(regReqData.name)) {
//     // если пользователь с таким именем существует
//     const userInfo: UserInfo = users.get(regReqData.name)!;
//     if (regReqData.password === userInfo!.password) {
//       // верный пороль
//       userInfo.ws = ws;
//       const payload = JSON.stringify({
//         type: 'reg',
//         data: JSON.stringify({
//           name: regReqData.name,
//           index: userInfo.index,
//           error: false,
//           errorText: '',
//         }),
//         id: 0,
//       });
//       console.log('payload', payload);
//       ws.send(payload);
//       updateRooms(ws);
//       updateWinners(ws);
//     } else {
//       // неверный пороль
//       const payload = JSON.stringify({
//         type: 'reg',
//         data: JSON.stringify({
//           name: regReqData.name,
//           index: 0,
//           error: true,
//           errorText: 'incorrect password',
//         }),
//         id: 0,
//       });
//       console.log('payload', payload);
//       ws.send(payload);
//     }
//   } else {
//     //если пользователя с таким именем не существует:
//     const user: UserInfo = {
//       password: regReqData.password,
//       index: index++,
//       ws,
//       wins: 0,
//     };
//     users.set(regReqData.name, user);
//     const payload = JSON.stringify({
//       type: 'reg',
//       data: JSON.stringify({
//         name: regReqData.name,
//         index: 123,
//         error: false,
//         errorText: '',
//       }),
//       id: 0,
//     });
//     console.log('payload', payload);
//     ws.send(payload);
//     updateRooms(ws);
//     updateWinners(ws);
//   }
// }

// function updateWinners(ws: WebSocket) {
//   const entries = users.entries();
//   // const entries = Array.from(users.entries());

//   // let index = 0;
//   // console.log(entries)
//   const payload: any = {
//     type: 'update_winners',
//     data: [],
//     id: 0,
//   };
//   for (const couple of entries) {
//     const payloadObj = {
//       name: couple[0],
//       wins: couple[1].wins,
//     };
//     payload.data.push(payloadObj);
//   }
//   payload.data = JSON.stringify(payload.data);
//   console.log('payload', payload);
//   ws.send(JSON.stringify(payload));
// }

// function updateRooms(ws: WebSocket) {
//   const payload = {
//     type: 'update_room',
//     data: JSON.stringify([
//       {
//         roomId: 1,
//         roomUsers: [
//           {
//             name: 'user32',
//             index: 2,
//           },
//         ],
//       },
//     ]),
//     id: 0,
//   };
//   console.log('payload', payload);
//   ws.send(JSON.stringify(payload));
// }
