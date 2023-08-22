<template>
  <div class="flex flex-col lg:flex-row mb-20">
    <div class="lg:basis-2/3 xl:basis-1/2 relative">
      <h2 class="text-3xl md:text-4xl mb-8 text-gray-dark">Wyślij wiadomość</h2>
      <div
        class="mb-10 relative transition duration-200"
        :class="{ 'opacity-50 pointer-events-none': isPending }"
      >
        <form ref="form" class="flex flex-wrap gap-5" @submit.prevent>
          <UiPrimarInput
            ref="name"
            :type="'text'"
            :name="'your-name'"
            :text="'Imię i nazwisko'"
            :required="true"
          />
          <UiPrimarInput
            ref="company"
            :type="'text'"
            :name="'company-name'"
            :text="'Nazwa firmy (opcjonalne)'"
          />
          <UiPrimarInput
            ref="email"
            :type="'email'"
            :name="'your-email'"
            :text="'Adres e-mail'"
            :required="true"
          />
          <UiPrimarInput
            ref="tel"
            :type="'tel'"
            :name="'your-tel'"
            :text="'Nr telefonu'"
            :required="true"
          />
          <UiPrimaryTextarea
            ref="message"
            :name="'your-message'"
            :text="'Treść wiadomości'"
            :required="true"
            class="w-full min-h-[240px] max-h-[400px]"
          />

          <p class="text-xs md:text-sm text-gray-600 mb-2">
            Twoje dane przetważamy zgodnie z naszą <b>polityką prywatności</b>.
          </p>

          <UiPrimaryButton class="ml-auto" @click.native="sendForm()" :class="{'animate-pulse':isPending}">
            Wyślij
          </UiPrimaryButton>
        </form>
      </div>
      <Transition name="fade">
        <div
          v-show="errorInfo"
          class="absolute inset-0 -inset-b-1 flex flex-col items-center justify-center bg-gray-lightest/90 p-5 md:p-10"
        >
          <svg
            class="mb-10 h-20 fill-red-600"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="1" id="_1">
              <path
                d="M257,461.46c-114,0-206.73-92.74-206.73-206.73S143,48,257,48s206.73,92.74,206.73,206.73S371,461.46,257,461.46ZM257,78C159.55,78,80.27,157.28,80.27,254.73S159.55,431.46,257,431.46s176.73-79.28,176.73-176.73S354.45,78,257,78Z"
              />
              <path
                d="M342.92,358a15,15,0,0,1-10.61-4.39L160.47,181.76a15,15,0,1,1,21.21-21.21L353.53,332.4A15,15,0,0,1,342.92,358Z"
              />
              <path
                d="M171.07,358a15,15,0,0,1-10.6-25.6L332.31,160.55a15,15,0,0,1,21.22,21.21L181.68,353.61A15,15,0,0,1,171.07,358Z"
              />
            </g>
          </svg>
          <p class="text-2xl md:text-3xl text-center max-w-lg mb-5 md:mb-10">
            {{ errorInfo }}
          </p>
          <nuxt-link
            :to="'/'"
            class="underline text-gold-light hover:text-gold-dark transition duration-200 text-base md:text-xl"
            >Wróć do strony głównej</nuxt-link
          >
        </div>
      </Transition>

      <Transition name="fade">
        <div
          v-show="messageSent"
          class="absolute inset-0 -inset-b-1 flex flex-col items-center justify-center bg-gray-lightest/90 p-5 md:p-10"
        >
          <svg
          class="mb-5 md:mb-10 fill-gold-light h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100px"
            height="100px"
          >
            <path
              d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"
            />
          </svg>
          <p class="text-3xl md:text-4xl text-center max-w-lg mb-5 md:mb-10">
            Dziękujemy za wysłanie wiadomości!
          </p>
          <nuxt-link
            :to="'/'"
            class="underline text-gold-light hover:text-gold-dark transition duration-200 text-base md:text-xl"
            >Wróć do strony głównej</nuxt-link
          >
        </div>
      </Transition>
    </div>
    <div class="lg:basis-1/3 xl:basis-1/2 lg:pl-10 shrink-0">
      <div
        class="flex-col lg:ml-auto bg-gray-dark p-5 md:p-10 md:pt-16 lg:max-w-fit"
      >
        <h2 class="text-3xl md:text-4xl text-white mb-8">
          Zostańmy w kontakcie
        </h2>
        <CommonContactData />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPending: false,
      errorInfo: '',
      messageSent: false,
    }
  },
  methods: {
    async sendForm() {
      this.isPending = true
      let isValid = true

      let inputsArray = Object.values(this.$refs)

      for (let i = 0; i < inputsArray.length; i++) {
        const input = inputsArray[i]
        if (['<UiPrimarInput>', '<UiPrimaryTextarea>'].includes(input._name)) {
          input.validate()
          if (input.isValid === false) {
            isValid = false
            break
          } else {
            isValid = true
          }
        }
      }

      const form = this.$refs['form']
      if (form && isValid) {
        const formData = new FormData(form)
        try {
          const response = await this.$axios.$post(
            '/contact-form-7/v1/contact-forms/243/feedback',
            formData
          )
          console.log(response);
          if (response.status === 'mail_sent') {
              this.messageSent = true
          }
        } catch (error) {
          this.errorInfo = 'Wystąpił błąd, proszę spróbować później'
          console.log(error.response)
        }
      }
      this.isPending = false
    },
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
