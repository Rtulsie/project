import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope)

const Img = props => (
    <FontAwesomeIcon icon={props.icon} />
)
export default Img
