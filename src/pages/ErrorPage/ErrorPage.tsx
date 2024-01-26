import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  let title = '에러발생!'
  let message = '뭔가 잘못되었씁니다.'
  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data.message
    }
    if (error.status === 404) {
      title = '페이지를 찾을 수 없습니다.'
      message = '해당 리소스를 찾을 수 없습니다.'
    }
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  )
}

export default ErrorPage
