import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
  client: PropTypes.bool
}
const defaultProps = {
  client: false,
  server: false
}

const ConditionallyRender = ({ client, server, children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted && client) {
    return null
  }
  if (isMounted && server) {
    return null
  }

  return children
}

ConditionallyRender.propTypes = propTypes
ConditionallyRender.defaultProps = defaultProps
export default ConditionallyRender
