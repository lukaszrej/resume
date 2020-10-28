import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { css, Global } from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";
import useSiteMetadata from "../data/hooks/useSiteMetadata";
import usePersonalData from "../data/hooks/usePersonalData";
import StyledHead from "../components/styled/StyledHead";

export default () => {
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();
    const { name } = usePersonalData();

    return (
        <>
            <Helmet>
                <title>{ `${title} | ${author}` }</title>
                <meta charSet={ charSet } />
                <meta name="author" content={ author } />
                <meta name="description" content={ description } />
                <meta name="robots" content={ robots } />
                <html lang={ lang } />
            </Helmet>
            <Global
                styles={ css`                    
                    body { background-color: ${state.isDark ? theme.dark.background : theme.light.background} }
                    h1, h2, p, div, a { color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor} }
                    Button { background-image: url("${state.isDark ? theme.dark.sunWhite : theme.light.sunBlack}"); background-color: transparent }
                `}
            />
            <StyledHead>
                <header>
                    <h1>{ name }</h1>
                </header>
                <button onClick={ () => dispatch({ type: "TOGGLE_DARK_MODE" }) }/>
            </StyledHead>
        </>
    );
};
