import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";
import useSiteMetadata from "../hooks/useSiteMetadata";
import "../styles/main.scss"
import usePersonalData from "../hooks/usePersonalData";

const Head = () => {
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();
    const { name } = usePersonalData();

    return (
        <>
            <Helmet>
                <title>{`${ title } | ${ author }`}</title>
                <meta charSet={ charSet }/>
                <meta name="author" content={ author }/>
                <meta name="description" content={ description }/>
                <meta name="robots" content={ robots }/>
                <html lang={ lang }/>
            </Helmet>
            <Global
                styles={css`                    
                    body { background-color: ${state.isDark ? theme.dark.background : theme.light.background} }
                    h1, h2, p, div { color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor} }
                    div.p-header__mode-button { background-image: url("${state.isDark ? theme.dark.iconWhite : theme.light.iconBlack}") }
                `}
            />
            <header className="p-header">
                <h1 className="p-header__title">{ name }</h1>
                <div className='p-header__mode-button'
                     onClick={ () => dispatch({type: "TOGGLE_DARK_MODE" }) }
                     role="button" tabIndex="0" />
            </header>

        </>
    )
};

export default Head;