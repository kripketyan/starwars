import { HTTP, HTTPS } from "@constants/api";

/**
 * Изменяет url c http на https
 * @param {String} url - это url для изменения
 * @returns {String} - это url c https
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

/**
 * Отправляет запрос Fetch
 * @param {String} url - это url для запроса
 * @returns {Promise} -  Promise c результатом запроса
 */

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  return res;
};
