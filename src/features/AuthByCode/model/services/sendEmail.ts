export const sendEmail = async (): Promise<string> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve('success')
      } else {
        // eslint-disable-next-line
        reject('error')
      }
    }, 2000)
  })
}
