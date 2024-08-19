import { Link } from "react-router-dom";
import AccountLayout from "./layout";

export const Account = () => {
  return (
    <AccountLayout>
      <p className="text-[14px] sm:text-2xl md:text-3xl font-bold mb-2">
        Аккаунт
      </p>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
        <p className="font-medium">Faxriddin Mulatov</p>
        <a href="mailto:workmulatov@gmail.com">workmulatov@gmail.com</a>
        <Link
          className="md:ml-3 underline font-medium hover:no-underline"
          to=""
        >
          Перейти в профиль
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <Link
          to="/account/personal-information"
          className="col-span-1 py-5 px-4 border rounded-md hover:border-[#03559E] flex flex-col justify-between h-56"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#03559E"
              d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h20c1.09-.04 1.96-.91 2-2V5a2.074 2.074 0 0 0-2-2m0 16H2V5h20zm-8-2v-1.25c0-1.66-3.34-2.5-5-2.5s-5 .84-5 2.5V17zM9 7a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9 12a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 9 7m5 0v1h6V7zm0 2v1h6V9zm0 2v1h4v-1z"
            />
          </svg>
          <div>
            <p className="font-medium mb-2">Личная информация</p>
            <p>Faxriddin Mulatov, workmulatov@gmail.com</p>
          </div>
        </Link>
        <Link
          to="login-and-security"
          className="col-span-1 py-5 px-4 border rounded-md hover:border-[#03559E] flex flex-col justify-between h-56"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#03559E"
              d="m12 .44l10 3.5V12c0 4.127-2.533 7.012-4.896 8.803a19.7 19.7 0 0 1-4.65 2.595l-.087.033l-.025.009l-.007.002l-.003.001c-.001 0-.002 0-.332-.943l-.331.944h-.001l-.003-.002l-.007-.002l-.025-.01l-.087-.032a18 18 0 0 1-1.39-.606a20 20 0 0 1-3.26-1.989C4.534 19.012 2 16.127 2 12V3.94zm0 22.06l-.331.944l.331.116l.331-.116zm0-1.072l.009-.004a17.8 17.8 0 0 0 3.887-2.215C18.034 17.59 20 15.223 20 12V5.36l-8-2.8l-8 2.8V12c0 3.223 1.966 5.588 4.104 7.21A17.8 17.8 0 0 0 12 21.428m6.072-13.085l-7.071 7.071l-4.243-4.242l1.415-1.415L11 12.586l5.657-5.657z"
            />
          </svg>
          <div>
            <p className="font-medium mb-2">Вход и безопасность</p>
            <p>Обновите пароль и обеспечьте безопасноть аккаунта</p>
          </div>
        </Link>
        <Link className="col-span-1 py-5 px-4 border rounded-md hover:border-[#03559E] flex flex-col justify-between h-56">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="56"
            viewBox="0 0 24 24"
          >
            <path
              fill="#03559E"
              d="M13.5 12.423q-.846 0-1.423-.577t-.577-1.423T12.077 9t1.423-.577T14.923 9t.577 1.423t-.577 1.423t-1.423.577m-6.192 3.193q-.667 0-1.141-.475q-.475-.475-.475-1.141V6.846q0-.666.475-1.14t1.14-.475h12.385q.667 0 1.141.474t.475 1.141V14q0 .666-.475 1.14q-.474.476-1.14.476zm1-1h10.384q0-.672.475-1.144q.474-.472 1.14-.472V7.846q-.67 0-1.142-.474q-.473-.475-.473-1.141H8.308q0 .671-.475 1.143q-.474.472-1.14.472V13q.67 0 1.143.475q.472.474.472 1.14m9.538 4H4.308q-.667 0-1.141-.474q-.475-.475-.475-1.141V8.692q0-.212.144-.356t.357-.144t.356.144t.143.356V17q0 .23.192.423q.193.193.424.193h13.538q.213 0 .356.143q.144.144.144.357t-.144.356t-.356.144m-10.538-4h-.616V6.23h.616q-.25 0-.433.183t-.183.432V14q0 .25.183.433t.433.183"
            />
          </svg>
          <div>
            <p className="font-medium mb-2">Платежи и выплаты</p>
            <p>Проверте платежи, выплаты, купоны и подарочные карты</p>
          </div>
        </Link>
      </div>
    </AccountLayout>
  );
};

export default Account;
