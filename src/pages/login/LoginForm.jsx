import { useFormik } from 'formik';
import Header from './../../components/Header';
import { schema } from './schema';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/coins');
    }
  }, [user]);

  // useFormik: formik özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // form'da tutulacak değerleri belirleme
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    // form validayonlarını tanıtma
    validationSchema: schema,

    // formun gönderilme olayında çalışır
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // kullanıcıyı kaydeder
      signUser(values);

      // formu temizler
      actions.resetForm();

      // ana sayfaya yönlendir
      navigate('/coins');
    },
  });

  return (
    <div>
      <Header />

      <div className="container">
        <div className="logo">
          <img src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png" />
          <h3>CoinMania</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email &&
              formik.touched.email &&
              'input-error'
            }
          />
          {/* hata varsa ve inputtan odak kaybedildiyse hata mesajını verme */}
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
          )}

          <label>Yaş</label>
          <input
            type="number"
            id="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.age && formik.touched.age && 'input-error'
            }
          />
          {/* hata varsa ve inputtan odak kaybedildiyse hata mesajını verme */}
          {formik.errors.age && formik.touched.age && (
            <p className="error">{formik.errors.age}</p>
          )}

          <label>Şifre</label>
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onPaste={() => false}
            onBlur={formik.handleBlur}
            className={
              formik.errors.password &&
              formik.touched.password &&
              'input-error'
            }
          />
          {/* hata varsa ve inputtan odak kaybedildiyse hata mesajını verme */}
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          <label>Şifre Onay</label>
          <input
            type="password"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              'input-error'
            }
          />
          {/* hata varsa ve inputtan odak kaybedildiyse hata mesajını verme */}
          {formik.errors.confirmPassword &&
            formik.touched.confirmPassword && (
              <p className="error">{formik.errors.confirmPassword}</p>
            )}

          <div className="check">
            <div className="d-flex gap-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                onChange={formik.handleChange}
                value={formik.values.terms}
              />
              <label htmlFor="terms">Okudum onaylıyorum</label>
            </div>

            {/* hata varsa ve inputtan odak kaybedildiyse hata mesajını verme */}
            {formik.errors.terms && formik.touched.terms && (
              <p className="error">{formik.errors.terms}</p>
            )}
          </div>
          <button disabled={formik.isSubmitting} type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
