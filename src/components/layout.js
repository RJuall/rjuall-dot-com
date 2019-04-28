/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import { Global, css } from '@emotion/core'
import 'spectre.css'
require('typeface-arvo')
require('typeface-cabin')

const globalFontStyles = {
  'h1, h2, h3, h4, h5, h6, .heading': {
    fontFamily: `'Arvo', serif`,
    fontWeight: `700`,
    letterSpacing: `0.025em`,
    wordSpacing: `0.1em`,
    lineHeight: `1.5em`,
  },
  '*': {
    fontFamily: `'Cabin', sans-serif`,
    fontSize: `1.1rem`,
    fontWeight: `400`,
    letterSpacing: `0.05em`,
    wordSpacing: `0.15em`,
    lineHeight: `1.35em`,
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global styles={globalFontStyles}/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
