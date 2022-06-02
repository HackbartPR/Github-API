//COMPONENTS
import * as S from './style'

export const Info = ({ user }) => {
  return (
    <S.Info>
      <img src={user.avatar_url}></img>

      <div className="info">
        <h2>
          <a href={user.html_url} target="_blank">
            {user.name}
          </a>
        </h2>
        <span>{`Usuário: ${user.login}`}</span>
        <span>{`Empresa: ${user.company}`}</span>
        <span>{`Endereço: ${user.location}`}</span>
        <span>{`Blog: ${user.blog}`}</span>

        <div className="info-datas">
          <div className="info-datas__wrapper">
            <span className="info-datas__title">Seguidores</span>
            <span className="info-datas__value">{user.followers}</span>
          </div>
          <div className="info-datas__wrapper">
            <span className="info-datas__title">Seguindo</span>
            <span className="info-datas__value">{user.following}</span>
          </div>
          <div className="info-datas__wrapper">
            <span className="info-datas__title">Gists</span>
            <span className="info-datas__value">{user.public_gists}</span>
          </div>
          <div className="info-datas__wrapper">
            <span className="info-datas__title">Repos.</span>
            <span className="info-datas__value">{user.public_repos}</span>
          </div>
        </div>
      </div>
    </S.Info>
  )
}
