<template>
    <div>
        <h2>
            {{ paymentMethod?.text }}
        </h2>
        <h3>
            Definiciones y Aceptación de los Términos
        </h3>
        <p>
            Estos términos y condiciones rigen el uso de los servicios de banca en línea ofrecidos por [Nombre del
            Banco].
            Al acceder o utilizar estos servicios, el usuario acepta y está de acuerdo con los términos aquí descritos.

        </p>
        <h3>
            Requisitos de Uso
        </h3>
        <p>
            El usuario debe ser mayor de edad y tener capacidad legal para contratar. Además, debe contar con los medios
            tecnológicos necesarios para acceder al servicio (dispositivo compatible, conexión a Internet, etc.).
        </p>

        <h3>
            Seguridad y Responsabilidades del Usuario
        </h3>
        <p>
            El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y notificar de
            inmediato
            cualquier uso no autorizado de su cuenta. [Nombre del Banco] no se hace responsable de las pérdidas causadas
            por
            negligencia del usuario en el manejo de sus credenciales.
        </p>

        <h3>
            Servicios Ofrecidos
        </h3>
        <p>
            Los servicios de banca en línea permiten realizar consultas de saldo, transferencias, pagos y otros trámites
            descritos en la plataforma. La disponibilidad de ciertos servicios puede variar según la región y el tipo de
            cuenta.
        </p>

        <h3>
            Política de Privacidad
        </h3>
        <p>
            [Nombre del Banco] recopila y trata los datos personales conforme a su política de privacidad, la cual está
            disponible en [enlace]. El uso del servicio implica la aceptación de estas políticas.
        </p>

        <h3>
            Uso Aceptable
        </h3>
        <p>
            El usuario se compromete a no usar los servicios para actividades ilegales, fraudulentas o que violen los
            derechos de terceros. Cualquier uso indebido puede llevar al bloqueo o cancelación de la cuenta.
        </p>

        <h3>
            Limitación de Responsabilidad
        </h3>
        <p>
            [Nombre del Banco] no se responsabiliza por interrupciones en el servicio debido a mantenimiento, fallos
            técnicos o eventos de fuerza mayor. Asimismo, no garantiza la disponibilidad continua del servicio.
        </p>

        <h3>
            Modificaciones y Actualizaciones
        </h3>
        <p>
            [Nombre del Banco] se reserva el derecho de modificar estos términos en cualquier momento. Los cambios se
            notificarán a los usuarios a través del sitio web o por otros medios electrónicos.
        </p>

        <h3>
            Jurisdicción y Ley Aplicable
        </h3>
        <p>
            Estos términos y condiciones se rigen por las leyes de [país o región específica]. Cualquier disputa se
            resolverá ante los tribunales de [ciudad o región específica].
        </p>

        <h3>
            Contacto y Atención al Cliente
        </h3>
        <p>
            Para cualquier pregunta o inquietud sobre estos términos, los usuarios pueden contactar a [Nombre del Banco]
            a
            través de [email/ número de contacto].
        </p>
        <e-checkbox v-model="checkboxModel" label="Acepto los términos y condiciones" :rules="[_required]" />
    </div>
</template>
<script lang="ts" setup>
import type { PaymentMethod } from "~/types";
const { _required } = useRules();

export interface Props {
    paymentMethod?: PaymentMethod
}
const data = reactive({
    accept: false
})
const emit = defineEmits<{
    (e: 'accept', value: boolean): void,
}>()
const checkboxModel = computed({
    get: () => data.accept,
    set: (value: boolean) => {
        emit('accept', value)
        data.accept = value
    }
})

const props = defineProps<Props>()
</script>