// export function reg(ws: WebSocket, req: Reg) {
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
//   }
// }