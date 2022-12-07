import axios, {AxiosResponse} from 'axios';

// ? ==========================================================
// ? 主にinstagramの取得などに使える関数
// ? ==========================================================

export const fetchApi = async (parentElement: HTMLElement | null, url: string) => {
  if (!parentElement) return;
  await axios
    .get(url)
    .then((res: AxiosResponse) => {
      // 叩くapiが不明なため一旦any
      const res_data = res.data;
      let appendElement = '';

      for (let i = 0; i < res_data.length; i++) {
        appendElement += `
        <li>
          <p class="text-sm">${res_data[i].title}</p>
          <p class="py-4 font-noto text-base leading-8">
            ${res_data[i].body}
          </p>
        </li>`;
      }
      parentElement.innerHTML = appendElement;
    })
    .catch((error) => {
      parentElement.innerHTML = '<p>エラーが発生しました</p>';
      new Error(error.message);
    });
};
