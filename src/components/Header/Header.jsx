import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Главная</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="addpost">Добавить пост</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="text-center">
        Il tuo percorso
        <small className="text-muted"> (in immagini)</small>
      </h1>
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>Настойчивость может преодолеть всё, даже законы природы.</p>
        </blockquote>
        <figcaption className="blockquote-footer"><cite title="Source Title">Джон Дэвисон Рокфеллер</cite></figcaption>
      </figure>
      <hr className="my-1" />
    </>
  )
}

export default Header
