import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://212.16.73.121:5001/api/v1/', // آدرس اصلی API خود را اینجا وارد کنید
    // می‌توانید تنظیمات پیش‌فرض دیگری نیز اضافه کنید، مانند زمان‌سنجی یا هدرها.
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('axios', axiosInstance); // ارائه نمونهAxios به عنوان یک قابلیت
});