import axios from 'axios';

// ? ==========================================================
// ? 主にinstagramの取得などに使える関数
// ? ==========================================================

export const fetchApi = (parentElement: Element | null, url: string) => {
  axios
    .get(url)
    .then((res: any) => {
      console.log(res);
      const res_data = res.data;
      console.log('res_data', res_data);

      let appendElement = '';

      for (let i = 0; i < res_data.length; i++) {
        appendElement += `
          <li>
            <p>${res_data[i].name}</p>
          </li>`;
      }
      parentElement!.innerHTML = appendElement;
    })
    .catch((error) => {
      parentElement!.innerHTML = '<p>エラーが発生しました</p>';
      console.log(error);
    });
};
