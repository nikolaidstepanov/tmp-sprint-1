class CardApi {
    constructor({ address, token, groupId }) {
      this._token = token;
      this._groupId = groupId;
      this._address = address;
    }
  
    getCardList() {
      return fetch(`${this._address}/${this._groupId}/cards`, {
        headers: {
          authorization: this._token,
        },
      })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
  
    addCard({ name, link }) {
      return fetch(`${this._address}/${this._groupId}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          link,
        }),
      })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
  
    removeCard(cardID) {
      return fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        },
      })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
  
    changeLikeCardStatus(cardID, like) {
      return fetch(`${this._address}/${this._groupId}/cards/like/${cardID}`, {
        method: like ? 'PUT' : 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
  }
  
  const cardApi = new CardApi({
    address: 'https://nomoreparties.co',
    groupId: `cohort0`,
    token: `80a75492-21c5-4330-a02f-308029e94b63`,
  });
  
  export default cardApi;