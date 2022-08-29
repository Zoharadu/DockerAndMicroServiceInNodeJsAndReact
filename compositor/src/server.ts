import express from "express";
import { middleWare } from "./utils/middleWare"
import cors from 'cors'
import { appRouterCompositor } from './compositor/compositor.router'
import { config } from "./config";
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

const appCompositor = express()
appCompositor.use(express.json());

appCompositor.use(cors({origin:"*"}))

appCompositor.use("/api/compositor",appRouterCompositor)
appCompositor.use('/api/group', createProxyMiddleware({ target: `http://group:${config.GROUP_PORT}`, changeOrigin: true , onProxyReq:fixRequestBody}));
appCompositor.use('/api/person', createProxyMiddleware({ target: `http://person:${config.PERSON_PORT}`, changeOrigin: true ,onProxyReq:fixRequestBody}));
appCompositor.use(middleWare)

appCompositor.use("*", (_req, res) => {
    res.status(404).send("Page not found")
})

export { appCompositor }










