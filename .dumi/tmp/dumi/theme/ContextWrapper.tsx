// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';

import nprogress from 'D:/github/doc/node_modules/nprogress';
import './nprogress.css';

import { SiteContext } from 'D:/github/doc/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // start nprogress
        nprogress.start();

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        pkg: {
          name: 'doc-test',
          description: 'A static site based on dumi',
          version: '0.0.1',
          license: 'MIT',
          authors: [],
        },
        historyType: 'browser',
        entryExports,
        demos,
        components,
        locales,
        loading,
        setLoading,
        hostname: undefined,
        themeConfig: {
          footer:
            'Copyright © 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: true },
          nprogress: true,
          name: 'doc-test',
        },
        _2_level_nav_available: true,
      }}
    >
      {outlet}
    </SiteContext.Provider>
  );
}
