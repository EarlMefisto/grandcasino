import s from "./App.module.css";

function App() {
  return (
    <>
      <div className={s.heroSectionContainer}>
        <picture>
          <source
            media="(min-width: 321px)"
            srcSet="assets/images/roulet-display.webp"
          />
          <img
            src="assets/images/roulet.webp"
            alt="roulet-image"
            className={s.heroImage}
          />
        </picture>
        <div className={s.titleContainer}>
          <h2>220fs + 100byn</h2>
          <h1>
            приветственный бонус для новичков
          </h1>
        </div>
      </div>

      <div className={s.container}>
        <div className={s.points}>
          <img src="assets/icons/number-1.svg" alt="one" />
          <span>регистрируйся и верифицируйся на gg.by</span>
        </div>
        <div className={s.points} style={{ margin: "16px 0" }}>
          <img src="assets/icons/number-2.svg" alt="two" />
          <span>вноси депозиты</span>
        </div>
        <div className={s.points}>
          <img src="assets/icons/number-3.svg" alt="three" />
          <span>получай приветственные бонусы</span>
        </div>
        <a
          href="https://www.grandcasino.by/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="submit">начать играть</button>
        </a>
      </div>
      <div className={s.container} style={{ alignItems: "flex-start" }}>
        <div className={s.text}>
          <img src="assets/icons/calendar.svg" alt="calendar-icon" />
          <p>Даты проведения акции: с 00:00 20.08.2024 по 23:59 30.06.2025.</p>
        </div>
        <div className={s.text}>
          <img src="assets/icons/shield.svg" alt="shield-icon" />
          <p>
            Акция доступна только тем пользователям, которые прошли верификацию{" "}
            <a
              href="https://www.grandcasino.by/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              grandcasino.by{" "}
            </a>
            с 19.08.2024.
          </p>
        </div>
        <div className={s.text}>
          <img src="assets/icons/payments.svg" alt="payments-icon" />
          <p>
            Сделайте ПЕРВЫЙ депозит на сумму от 20 BYN и получите ПЕРВЫЙ бонус –
            50 фриспинов в слот-игре Rise of Zeus от Belatra. В случае, если
            ПЕРВЫЙ депозит будет сделан не позже, чем в течение 72 часов после
            верификации, Вы также получите дополнительные 20 фриспинов в
            слот-игре Lucky Streak 3 от Endorphina. (Внимание! Если первый
            депозит будет менее 20 BYN, первый и последующие этапы бонуса будут
            недоступны).
          </p>
        </div>
        <div className={s.text}>
          <img src="assets/icons/payments.svg" alt="payments-icon" />
          <p>
            Сделайте ВТОРОЙ депозит на сумму от 40 BYN и получите ВТОРОЙ бонус –
            50 фриспинов в слот-игре Diamond Cats от Amatic (Внимание! Если
            второй депозит будет менее 40 BYN, второй и последующие этапы бонуса
            будут недоступны).
          </p>
        </div>
        <div className={s.text}>
          <img src="assets/icons/payments.svg" alt="payments-icon" />
          <p>
            Сделайте ТРЕТИЙ депозит на сумму от 50 BYN и получите ТРЕТИЙ бонус –
            100 BYN вейджер бонус (Внимание! Если третий депозит будет менее 50
            BYN, третий и последующие этапы бонуса будут недоступны).
          </p>
        </div>
        <div className={s.text}>
          <img src="assets/icons/payments.svg" alt="payments-icon" />
          <p>
            Сделайте ЧЕТВЕРТЫЙ депозит на сумму от 100 BYN и получите ЧЕТВЕРТЫЙ
            бонус – 100 фриспинов в слот-игре Big Bass Bonanza от Pragmatic Play
            (Внимание! Если четвертый депозит будет менее 100 BYN, четвертый
            этап бонуса будет недоступен).
          </p>
        </div>
        <div className={s.text}>
          <img src="assets/icons/payments.svg" alt="payments-icon" />
          <p>
            Клиент может вносить депозиты и на меньшую сумму, однако в этом
            случае приветственный бонус (этап бонуса) не будет предоставлен.
          </p>
        </div>
      </div>

      <div className={s.container}>
        <div className={s.card}>
          <h3>условия бесплатных вращений</h3>
          <div>
            <ul className={s.listContainer}>
              <li>
                Фриспины будут начислены после внесения депозита в течение 72
                часов
              </li>
              <li>
                Фриспины будут доступны после подтверждения в разделе «Бонусы» –
                «Бесплатные вращения» в личном кабинете.
              </li>
              <li>
                Фриспины будут действительны в течение 2 дней после начисления.
              </li>
              <li>
                Выигрыши, полученные в результате бесплатных вращений, не
                подлежат отыгрышу.
              </li>
              <li>
                Акция распространяется только на первые четыре депозита. Клиент
                может воспользоваться бонусом только один раз.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.card} style={{ margin: "48px 0" }}>
          <h3>условия вейджер бонуса</h3>
          <div>
            <ul className={s.listContainer} style={{ marginBottom: "24px" }}>
              <li>Отыгрыш – X25.</li>
              <li>Максимальная сумма выплаты – 100 %.</li>
              <li>
                Отыгрыш доступен игроку в течение 2 дней после подтверждения.
              </li>
              <li>
                Бонус можно отыграть во всех слот-играх, кроме игр провайдеров
                Evoplay, Retro Gaming, Booming Games и игр Solar King, Solar
                Temple, Solar Queen провайдера Playson.
              </li>
              <li>
                Игры с функцией «Купи бонус», «Megaways» и настольные игры
                недоступны для отыгрыша.
              </li>
            </ul>
          </div>
          <p>
            <b>Пример 1:</b> Вы сделали первый депозит 20 BYN в течение 72 часов
            после верификации аккаунта и получили 50 фриспинов в слот-игре Rise
            of Zeus от Belatra, а также 20 фриспинов в слот-игре Lucky Streak 3
            от Endorphina. Далее Вы сделали второй депозит 40 BYN и получили 50
            фриспинов в слот-игре Diamond Cats от Amatic. Затем Вы сделали
            третий депозит на сумму 50 BYN и получили 100 BYN вейджер бонусом на
            все доступные игры. Сделав четвертый депозит на сумму 100 BYN, Вы
            получили 100 фриспинов в слот-игре Big Bass Bonanza от Pragmatic
            Play.
          </p>
          <p style={{ margin: "24px 0" }}>
            <b>Пример 2:</b> с момента Вашей верификации прошло больше 72 часов,
            Вы сделали первый депозит 20 BYN и получили 50 фриспинов в слот-игре
            Rise of Zeus от Belatra. Далее Вы сделали второй депозит 40 BYN и
            получили 50 фриспинов в слот-игре Diamond Cats от Amatic. Затем Вы
            сделали третий депозит на сумму 50 BYN и получили 100 BYN вейджер
            бонусом на все доступные игры. Сделав четвертый депозит на сумму 100
            BYN, Вы получили 100 фриспинов в слот-игре Big Bass Bonanza от
            Pragmatic Play.
          </p>
          <p>
            <b>Пример 3:</b> Вы сделали первый депозит 20 BYN в течение 72 часов
            после верификации аккаунта и получили 50 фриспинов в слот-игре Rise
            of Zeus от Belatra, а также 20 фриспинов в слот-игре Lucky Streak 3
            от Endorphina. Далее Вы сделали второй депозит 30 BYN. Так как
            второй депозит менее 40 BYN (т.е. не выполнено условие получения
            бонуса за второй депозит), следующие этапы приветственного бонуса
            Вам недоступны.
          </p>
        </div>
        <div className={s.card}>
          <h3>общие положения и условия</h3>
          <ul className={s.listContainer}>
            <li>
              Принимая участие в акции, клиент соглашается с ее условиями, а
              также с Правилами и положениями GrandCasino, опубликованными на
              сайте{" "}
              <a
                href="https://www.grandcasino.by/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.grandcasino.by
              </a>
              .
            </li>
            <li>
              GrandСasino оставляет за собой право изменить правила бонусного
              предложения в любое время или отменить его без предварительного
              уведомления, а также исключить из участия в бонусном предложении.
            </li>
            <li>
              В случае возникновения спорной ситуации окончательное решение
              будет принято GrandСasino.
            </li>
            <li>
              В случае открытия повторного игрового аккаунта для получения
              бонуса, передачи другим лицам информации о своих логинах и/или
              паролях и доступа к своему игровому аккаунту, совершения иного
              нарушения Правил, GrandСasino имеет право отменить бонус, а также
              заблокировать такой игровой аккаунт.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
