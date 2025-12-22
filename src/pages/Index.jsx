export default function  Index() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Авторизация</h3>
            </div>
            <div className="card-body">
              <form id="loginForm">
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email"  />
                    <div id="emailError" className="text-danger"></div>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Пароль</label>
                  <input type="password" className="form-control" id="password" name="password" />
                    <div id="passwordError" className="text-danger"></div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}