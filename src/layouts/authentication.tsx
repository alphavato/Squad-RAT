/*
//        _       _                      _
//       | |     | |                    | |
//   __ _| |_ __ | |__   __ ___   ____ _| |_ ___
//  / _` | | '_ \| '_ \ / _` \ \ / / _` | __/ _ \
// | (_| | | |_) | | | | (_| |\ V / (_| | || (_) |
//  \__,_|_| .__/|_| |_|\__,_| \_/ \__,_|\__\___/
//         | |
//         |_|
// Written by alphavato.
// Email : alphavato23@gmail.com
// Follow me on:
//  Github : https://github.com/alphavato
*/
import "@/styles/global.scss";
import "@/styles/layouts/authentication.scss";

import MetaTags from "@/components/core/MetaTag";

export default function AuthenticationLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <MetaTags title="Authentication layout"/>
      <div className="auth-container">
        {children}
      </div>
    </>
  )
}