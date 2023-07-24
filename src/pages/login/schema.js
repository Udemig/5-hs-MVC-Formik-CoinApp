import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 karakter, min 1 büyük harf, min 1 küçük harf, 1 sayı olmalı

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Lüfen geçerli bir email giriniz')
    .required('Zorunlu alan'),
  age: yup
    .number()
    .positive("Yaş değer 0'dan küçük olamaz")
    .min(18, '18 yaşından küçükler giremez')
    .max(100, "Yaşınız 100'den büyük olamaz")
    .required('Zorunlu Alan'),
  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    .matches(passwordRules, 'Lütfen daha güçlü bir şifre yazınız')
    .required('Zorunlu Alan'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Şifre eşleşmiyor')
    .required('Zorunlu Alan'),
  terms: yup
    .boolean()
    .oneOf([true], 'Koşulları kabul etmek zorundasıznız'),
});
