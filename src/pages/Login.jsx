import LoginFrom from "../components/LoginFrom"

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Авторизация</h3>
            </div>
            <div className="card-body">
              <LoginFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}