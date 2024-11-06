<template>
  <v-container fluid class="footer">
    <v-row justify="center" class="py-3 px-4">
      <v-col>
        <h5 class="text-muted text-center">Contact me</h5>
        <div class="d-flex justify-space-around">
          <ul class="block-list">
            <li
              v-for="(c, index) in contacts"
              :key="'contact_' + index"
              class="text-left list-item"
            >
              <a
                :href="c.href"
                class="vb-icon hvr-float-shadow"
                target="_blank"
                :title="c.title"
                :class="c.iconClass"
              />
            </li>
          </ul>
        </div>
        <!--    <div class="col-6">
              <div class="float-right">
                <h5 class="text-muted">Payment methods</h5>
                <ul class="block-list">
                  <li v-for="(pm, index) in paymentMethods" :key="'payment_' + index" class="text-left list-item list-item__right">
                    <a :href="pm.href" class="vb-icon hvr-float-shadow" target="_blank" :title="pm.title" :class="pm.iconClass"></a>
                  </li>
                </ul>
              </div>
            </div>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useEmailPopupStore } from '@/stores/emailPopup'

export default {
  setup () {
    const paymentMethods = [
      {
        title: 'Qiwi',
        href: 'https://qiwi.com/',
        iconClass: 'qiwi'
      }, {
        title: 'Яндекс Деньги',
        href: 'https://money.yandex.ru/',
        iconClass: 'yandex-money'
      }, {
        title: 'Bitcoin',
        href: 'https://bitcoin.org/en/',
        iconClass: 'bitcoin'
      }, {
        title: 'PayPal',
        href: 'https://www.paypal.com/',
        iconClass: 'paypal'
      }, {
        title: 'MasterCard',
        href: 'https://www.mastercard.com/',
        iconClass: 'mastercard'
      }
    ]
    const contacts = [
      {
        title: 'Telegram',
        href: 'tg://resolve?domain=vbarkasov',
        iconClass: 'telegram'
      }
    ]

    const emailPopup = useEmailPopupStore()
    const showPopup = emailPopup.showEmailPopup

    return {
      paymentMethods, contacts, showPopup
    }
  }
}
</script>

<style>
  .footer {
    background-color: #f9f9f9;
    border-top: .05rem solid #e5e5e5;
  }

  .vb-icon {
    display: inline-block;
    vertical-align: top;
    background: url("/static/img/icons-sprite.png") 0 0 no-repeat;
    text-indent: -5000px;
    width: 52px;
    height: 52px;
    opacity: 0.6;
  }

  .vb-icon:hover {
    opacity: 1;
  }

  .vb-icon.skype {
    background-position: -60px 0;
  }

  .vb-icon.email {
    background-position: -123px 0;
  }

  .vb-icon.telegram {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI0MCAyNDAiPgo8ZGVmcz4KCTxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjAuNjY2NyIgeTE9IjAuMTY2NyIgeDI9IjAuNDE2NyIgeTI9IjAuNzUiPgoJCTxzdG9wIHN0b3AtY29sb3I9IiMzMzMzMzMiIG9mZnNldD0iMCIvPgoJCTxzdG9wIHN0b3AtY29sb3I9IiMzMzMzMzMiIG9mZnNldD0iMSIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxsaW5lYXJHcmFkaWVudCBpZD0idyIgeDE9IjAuNjU5NyIgeTE9IjAuNDM2OSIgeDI9IjAuODUxMiIgeTI9IjAuODAyNCI+CgkJPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZmZmZiIgb2Zmc2V0PSIwIi8+CgkJPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgb2Zmc2V0PSIxIi8+Cgk8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjEyMCIgcj0iMTIwIiBmaWxsPSJ1cmwoI2IpIi8+CjxwYXRoIGZpbGw9IiNCRUJFQkUiIGQ9Im05OCAxNzVjLTMuODg3NiAwLTMuMjI3LTEuNDY3OS00LjU2NzgtNS4xNjk1TDgyIDEzMi4yMDU5IDE3MCA4MCIvPgo8cGF0aCBmaWxsPSIjODI4MjgyIiBkPSJtOTggMTc1YzMgMCA0LjMyNTUtMS4zNzIgNi0zbDE2LTE1LjU1OC0xOS45NTgtMTIuMDM1Ii8+CjxwYXRoIGZpbGw9InVybCgjdykiIGQ9Im0xMDAuMDQgMTQ0LjQxIDQ4LjM2IDM1LjcyOWM1LjUxODUgMy4wNDQ5IDkuNTAxNCAxLjQ2ODQgMTAuODc2LTUuMTIzNWwxOS42ODUtOTIuNzYzYzIuMDE1NC04LjA4MDItMy4wODAxLTExLjc0NS04LjM1OTQtOS4zNDgybC0xMTUuNTkgNDQuNTcxYy03Ljg5MDEgMy4xNjQ3LTcuODQ0MSA3LjU2NjYtMS40MzgyIDkuNTI4bDI5LjY2MyA5LjI1ODMgNjguNjczLTQzLjMyNWMzLjI0MTktMS45NjU5IDYuMjE3My0wLjkwODk5IDMuNzc1MiAxLjI1ODQiLz4KPC9zdmc+');
    background-position: 0 0;
  }

  .vb-icon.vk {
    background-position: 0 0;
  }

  .vb-icon.qiwi {
    background-position: -82px -59px;
    width: 39px;
  }

  .vb-icon.yandex-money {
    background-position: -56px -119px;
    width: 88px;
  }

  .vb-icon.bitcoin {
    background-position: -129px -59px;
  }

  .vb-icon.paypal {
    background-position: 3px -118px;
  }

  .vb-icon.mastercard {
    background-position: 0 -60px;
    width: 71px;
  }

  /* Effects */
  /* Float Shadow */
  .hvr-float-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }

  .hvr-float-shadow:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
  }

  .hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    /* move the element up by 5px */
  }

  .hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
  }

</style>
