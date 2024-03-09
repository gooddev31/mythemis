import Image from "next/image";
import {Form, Field, withFormik, FormikErrors, FormikProps} from 'formik';
import Link from "next/link";
interface FormValues {
    username?: string;
    telephone?: string;
    email: string;
    password: string;
    rePassword: string;
    type: "login" | "register"
}

interface MyFormSectionProps {
    initialEmail?: string
    type: "login" | "register"
}

const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting } = props;
    if(props.type === "login"){
        return (
            <Form className="flex flex-col mt-[50.32px] font-quicksand ">
                <Field name="email">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div>
                            <p className="font-[700] text-[32px]">E-Posta</p>
                            <input className="bg-[url('/img/emailAuth.svg')] font-[600] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="email" placeholder="E-Posta" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <Field name="password">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div className="mt-[18.32px]">
                            <p className="font-[700] text-[32px]">Şifre</p>
                            <input className="bg-[url('/img/passwordAuth.svg')] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="password" placeholder="Şifre" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <div>
                    <Field name="remember">
                        {({
                              field,
                              form: { touched, errors },
                              meta,
                          }) => (
                            <div className="mt-[53.34px] flex items-center justify-between">
                                <div className="flex gap-[18.95px]">
                                    <input type="checkbox" className="cursor-pointer w-[25.5px] accent-black"/>
                                    <p className="font-[600] text-[15px]">Hesabımı açık tut.</p>
                                </div>
                                <Link href="#" className="font-[600] text-[15px]">
                                    Şifremi unuttum?
                                </Link>
                            </div>
                        )}
                    </Field>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-[100%] h-[68px] bg-black rounded-[6px] cursor-pointer text-[#ffffff] mt-[19.82px] font-[700] text-[18px]">
                    Giriş
                </button>
                <p className="font-[700] text-[18px] mt-[106.45px]">Giriş seçenekleri</p>
                <button className="w-[167px] h-[62px] bg-[#FAFAFA] flex items-center justify-center gap-[19px] font-[700] text-[15px] mt-[32.72px]">
                    <Image src="/img/googleIcon_small.svg" alt="googleLogo" width={27} height={27}/>
                    Google
                </button>
                <p className="text-[18px] font-[700] flex gap-[4px] mt-[40.86px]">
                    <span className="text-[#99B2C6]">Henüz üye değil misin?</span>
                    Üye ol.
                </p>
            </Form>
        );
    } else if(props.type === "register"){
        // @ts-ignore
        return (
            <Form className="flex flex-col mt-[50.32px] font-quicksand">
                <Field name="username">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div>
                            <p className="font-[700] text-[32px]">İsim Soyisim</p>
                            <input className="bg-[url('/img/userAuth.svg')] font-[600] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="text" placeholder="İsim Soyisim" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <Field name="email">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div className="mt-[18.32px]">
                            <p className="font-[700] text-[32px]">E-Posta</p>
                            <input className="bg-[url('/img/emailAuth.svg')] font-[600] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="email" placeholder="E-Posta" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <Field name="password">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div className="mt-[18.32px]">
                            <p className="font-[700] text-[32px]">Şifre</p>
                            <input className="bg-[url('/img/passwordAuth.svg')] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="password" placeholder="Şifre Tekarari" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <Field name="rePassword">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div className="mt-[18.32px]">
                            <p className="font-[700] text-[32px]">Şifre Tekarari</p>
                            <input className="bg-[url('/img/passwordAuth.svg')] font-[600] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="password" placeholder="Şifre Tekarari" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <Field name="telephone">
                    {({
                          field,
                          form: { touched, errors },
                          meta,
                      }) => (
                        <div className="mt-[18.32px]">
                            <p className="font-[700] text-[32px]">Telefon</p>
                            <input className="bg-[url('/img/telAuth.svg')] font-[600] mt-[15.94px] w-[100%] bg-no-repeat bg-[center_left_27px] bg-[#FAFAFA] pl-[70px] pr-[15px] py-[19px]" type="tel" placeholder="53X XXX XX XX" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error text-[#FA5757] font-[700] mt-[10px] text-center">*{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <div>
                    <Field name="remember">
                        {({
                              field,
                              form: { touched, errors },
                              meta,
                          }) => (
                            <div className="mt-[53.34px] flex items-center justify-between">
                                <div className="flex gap-[18.95px]">
                                    <input type="checkbox" className="cursor-pointer w-[25.5px] accent-black"/>
                                    <p className="font-[600] text-[15px] w-[323px]">Kişisel verilerin korunmasına yönelik
                                        Aydınlatma Metnini okudum, kabul ediyorum.</p>
                                </div>
                            </div>
                        )}
                    </Field>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-[100%] h-[68px] bg-black rounded-[6px] cursor-pointer text-[#ffffff] mt-[19.82px] font-[700] text-[18px]">
                    Kayıt ol
                </button>
                <p className="text-[18px] font-[700] flex gap-[4px] mt-[40.86px]">
                    Kayıt seçenekleri
                </p>
                <button className="w-[167px] h-[62px] bg-[#FAFAFA] flex items-center justify-center gap-[19px] font-[700] text-[15px] mt-[32.72px]">
                    <Image src="/img/googleIcon_small.svg" alt="googleLogo" width={27} height={27}/>
                    Google
                </button>
            </Form>
        );
    }
};

const FormSection = withFormik<MyFormSectionProps, FormValues, {type: "login" | "register"}>({
    // Transform outer props into form values
    // @ts-ignore
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
            type: props.type
        };
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if(values.type === "register" && !values.password) {
            errors.password = 'Required';
        }else if(values.type === "register" && values.rePassword !== values.password) {
            errors.password = 'Dont match'
            errors.rePassword = 'Dont match'
        }
        if(values.type === "register" && !values.telephone) {
            errors.telephone = 'Required';
        }
        if(values.type === "register" && !values.username) {
            errors.username = 'Required';
        }
        return errors;
    },

    handleSubmit: values => {

    },
})(InnerForm);
export default FormSection;
