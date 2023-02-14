import React from 'react'
import PropTypes from 'prop-types'


type Props = {
  logo: string //whatsapp.png
  phone: string //325647894
  message: string //Estás comunicándote con Vtex itgloberspartner
  width: number //80px
  height: number //80px
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
    return <>
      <div className='fixed bottom-2 right-2 flex flexColumn' style= {{zIndex:9999}} >
        <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel='noreferrer noopener'
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="Logo de Whatsapp"
          />
        </a>
      </div>
    </>

}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  heigth: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "350456789",
  message: "Estás comunicándote con Vtex itgloberspartner Yesica Blanco, ingresa tu duda.",
  width: 70,
  heigth: 70
}

WhatsappButton.schema = {
  title: "Botón de Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "logo de whatsapp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega por favor el numero de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se verá para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "Teléfono",
      description: "Agrega por favor el numero de teléfono",
      type: "number"
    },
    heigth: {
      title: "Teléfono",
      description: "Agrega por favor el numero de teléfono",
      type: "number"
    }

    }

  }


export default WhatsappButton;
