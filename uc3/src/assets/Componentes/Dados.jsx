
import Styles from '../css/Dados.module.css';
import Julius from '../imagens/julius.png'
import { useState } from 'react';

function Dados() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Julius',
    lastName: 'Muquirana',
    birthDate: '2006-05-20',
    gender: 'Masculino',
    phone: '(11) 94533-0288',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <div className={Styles.container}>
      <div className={Styles.perfil}>
        <img
          src={Julius}
          alt="Foto do usuário"
          className={Styles.fotoPerfil}
        />
        <div>
          <h3>Julius</h3>
          <p>juliusmuquirana@gmail.com</p>
        </div>
      </div>

      <div className={Styles.dadosSection}>
        <h2>Dados Pessoais</h2>

        <div className={Styles.linhaDados}>
          <div>
            <strong>Nome e Sobrenome</strong><br />
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
              />
            ) : (
              userData.firstName
            )}
          </div>
        </div>

        <div className={Styles.linhaDados}>
          <div>
            <strong>Data de nascimento</strong><br />
            {isEditing ? (
              <input
                type="date"
                name="birthDate"
                value={userData.birthDate}
                onChange={handleChange}
              />
            ) : (
              new Date(userData.birthDate).toLocaleDateString('pt-BR')
            )}
          </div>
          <div>
            <strong>Gênero</strong><br />
            {isEditing ? (
              <select name="gender" value={userData.gender} onChange={handleChange}>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
              </select>
            ) : (
              userData.gender
            )}
          </div>
        </div>

        <p>
          <strong>Telefone</strong><br />
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          ) : (
            userData.phone
          )}
        </p>

        <button className={Styles.botaoEditar} onClick={toggleEdit}>
          {isEditing ? 'Salvar dados' : 'Alterar dados pessoais'}
        </button>
      </div>
    </div>
  );
}


export default Dados;