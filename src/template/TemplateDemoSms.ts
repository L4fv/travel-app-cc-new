export const myTemplateDmoSms = (params: any) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  dir="ltr"
  style="min-height: 100%; background: #f3f3f3"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body
    style="
      min-width: 100%;
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #0a0a0a;
      font-family: 'Cereal', Helvetica, Arial, sans-serif;
      font-weight: normal;
      padding: 0;
      margin: 0;
      text-align: left;
      font-size: 16px;
      line-height: 19px;
      width: 100% !important;
    "
  >
    <div
      class="preheader"
      style="
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        font-size: 0px;
        mso-hide: all;
        display: none !important;
      "
    ></div>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <style data-roadie-ignore data-immutable="true" type="text/css">
      /*Light*/
      @font-face {
        font-family: "Cereal";
        font-style: normal;
        font-weight: 200;
        
      }
      /*Regular*/
      @font-face {
        font-family: "Cereal";
        font-style: normal;
        font-weight: 300;
       
      }
      /*Medium*/
      @font-face {
        font-family: "Cereal";
        font-style: normal;
        font-weight: 500;
        
      }
      /*Bold*/
      @font-face {
        font-family: "Cereal";
        font-style: normal;
        font-weight: 700;
        
        
      }
      /*XBold*/
      @font-face {
        font-family: "Cereal";
        font-style: normal;
        font-weight: 800;
       
        
      }
      /*Black*/
      @font-face {
        font-family: "Cereal";
        font-style: normal;
        font-weight: 900;
        
      }

    </style>
    <style data-roadie-ignore data-immutable="true">
      @media only screen and (max-width: 596px) {
        .small-float-center {
          margin: 0 auto !important;
          float: none !important;
          text-align: center !important;
        }
        .small-text-center {
          text-align: center !important;
        }
        .small-text-left {
          text-align: left !important;
        }
        .small-text-right {
          text-align: right !important;
        }
      }
      @media only screen and (max-width: 596px) {
        table.body table.container .hide-for-large {
          display: block !important;
          width: auto !important;
          overflow: visible !important;
          max-height: none !important;
        }
      }
      @media only screen and (max-width: 596px) {
        table.body table.container .row.hide-for-large,
        table.body table.container .row.hide-for-large {
          display: table !important;
          width: 100% !important;
        }
      }
      @media only screen and (max-width: 596px) {
        table.body table.container .show-for-large {
          display: none !important;
          width: 0;
          mso-hide: all;
          overflow: hidden;
        }
      }
      @media only screen and (max-width: 596px) {
        table.body img {
          width: auto !important;
          height: auto !important;
        }
        table.body center {
          min-width: 0 !important;
        }
        table.body .container {
          width: 95% !important;
        }
        table.body .columns,
        table.body .column {
          height: auto !important;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
        table.body .columns .column,
        table.body .columns .columns,
        table.body .column .column,
        table.body .column .columns {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        table.body .columns .column.nested,
        table.body .columns .columns.nested,
        table.body .column .column.nested,
        table.body .column .columns.nested {
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
        table.body .collapse .columns,
        table.body .collapse .column {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        td.small-1,
        th.small-1 {
          display: inline-block !important;
          width: 8.33333% !important;
        }
        td.small-2,
        th.small-2 {
          display: inline-block !important;
          width: 16.66667% !important;
        }
        td.small-3,
        th.small-3 {
          display: inline-block !important;
          width: 25% !important;
        }
        td.small-4,
        th.small-4 {
          display: inline-block !important;
          width: 33.33333% !important;
        }
        td.small-5,
        th.small-5 {
          display: inline-block !important;
          width: 41.66667% !important;
        }
        td.small-6,
        th.small-6 {
          display: inline-block !important;
          width: 50% !important;
        }
        td.small-7,
        th.small-7 {
          display: inline-block !important;
          width: 58.33333% !important;
        }
        td.small-8,
        th.small-8 {
          display: inline-block !important;
          width: 66.66667% !important;
        }
        td.small-9,
        th.small-9 {
          display: inline-block !important;
          width: 75% !important;
        }
        td.small-10,
        th.small-10 {
          display: inline-block !important;
          width: 83.33333% !important;
        }
        td.small-11,
        th.small-11 {
          display: inline-block !important;
          width: 91.66667% !important;
        }
        td.small-12,
        th.small-12 {
          display: inline-block !important;
          width: 100% !important;
        }
        .columns td.small-12,
        .column td.small-12,
        .columns th.small-12,
        .column th.small-12 {
          display: block !important;
          width: 100% !important;
        }
        .body .columns td.small-1,
        .body .column td.small-1,
        td.small-1 center,
        .body .columns th.small-1,
        .body .column th.small-1,
        th.small-1 center {
          display: inline-block !important;
          width: 8.33333% !important;
        }
        .body .columns td.small-2,
        .body .column td.small-2,
        td.small-2 center,
        .body .columns th.small-2,
        .body .column th.small-2,
        th.small-2 center {
          display: inline-block !important;
          width: 16.66667% !important;
        }
        .body .columns td.small-3,
        .body .column td.small-3,
        td.small-3 center,
        .body .columns th.small-3,
        .body .column th.small-3,
        th.small-3 center {
          display: inline-block !important;
          width: 25% !important;
        }
        .body .columns td.small-4,
        .body .column td.small-4,
        td.small-4 center,
        .body .columns th.small-4,
        .body .column th.small-4,
        th.small-4 center {
          display: inline-block !important;
          width: 33.33333% !important;
        }
        .body .columns td.small-5,
        .body .column td.small-5,
        td.small-5 center,
        .body .columns th.small-5,
        .body .column th.small-5,
        th.small-5 center {
          display: inline-block !important;
          width: 41.66667% !important;
        }
        .body .columns td.small-6,
        .body .column td.small-6,
        td.small-6 center,
        .body .columns th.small-6,
        .body .column th.small-6,
        th.small-6 center {
          display: inline-block !important;
          width: 50% !important;
        }
        .body .columns td.small-7,
        .body .column td.small-7,
        td.small-7 center,
        .body .columns th.small-7,
        .body .column th.small-7,
        th.small-7 center {
          display: inline-block !important;
          width: 58.33333% !important;
        }
        .body .columns td.small-8,
        .body .column td.small-8,
        td.small-8 center,
        .body .columns th.small-8,
        .body .column th.small-8,
        th.small-8 center {
          display: inline-block !important;
          width: 66.66667% !important;
        }
        .body .columns td.small-9,
        .body .column td.small-9,
        td.small-9 center,
        .body .columns th.small-9,
        .body .column th.small-9,
        th.small-9 center {
          display: inline-block !important;
          width: 75% !important;
        }
        .body .columns td.small-10,
        .body .column td.small-10,
        td.small-10 center,
        .body .columns th.small-10,
        .body .column th.small-10,
        th.small-10 center {
          display: inline-block !important;
          width: 83.33333% !important;
        }
        .body .columns td.small-11,
        .body .column td.small-11,
        td.small-11 center,
        .body .columns th.small-11,
        .body .column th.small-11,
        th.small-11 center {
          display: inline-block !important;
          width: 91.66667% !important;
        }
        table.body td.small-offset-1,
        table.body th.small-offset-1 {
          margin-left: 8.33333% !important;
          margin-left: 8.33333% !important;
        }
        table.body td.small-offset-2,
        table.body th.small-offset-2 {
          margin-left: 16.66667% !important;
          margin-left: 16.66667% !important;
        }
        table.body td.small-offset-3,
        table.body th.small-offset-3 {
          margin-left: 25% !important;
          margin-left: 25% !important;
        }
        table.body td.small-offset-4,
        table.body th.small-offset-4 {
          margin-left: 33.33333% !important;
          margin-left: 33.33333% !important;
        }
        table.body td.small-offset-5,
        table.body th.small-offset-5 {
          margin-left: 41.66667% !important;
          margin-left: 41.66667% !important;
        }
        table.body td.small-offset-6,
        table.body th.small-offset-6 {
          margin-left: 50% !important;
          margin-left: 50% !important;
        }
        table.body td.small-offset-7,
        table.body th.small-offset-7 {
          margin-left: 58.33333% !important;
          margin-left: 58.33333% !important;
        }
        table.body td.small-offset-8,
        table.body th.small-offset-8 {
          margin-left: 66.66667% !important;
          margin-left: 66.66667% !important;
        }
        table.body td.small-offset-9,
        table.body th.small-offset-9 {
          margin-left: 75% !important;
          margin-left: 75% !important;
        }
        table.body td.small-offset-10,
        table.body th.small-offset-10 {
          margin-left: 83.33333% !important;
          margin-left: 83.33333% !important;
        }
        table.body td.small-offset-11,
        table.body th.small-offset-11 {
          margin-left: 91.66667% !important;
          margin-left: 91.66667% !important;
        }
        table.body table.columns td.expander,
        table.body table.columns th.expander {
          display: none !important;
        }
        table.body .right-text-pad,
        table.body .text-pad-right {
          padding-left: 10px !important;
        }
        table.body .left-text-pad,
        table.body .text-pad-left {
          padding-right: 10px !important;
        }
        table.menu {
          width: 100% !important;
        }
        table.menu td,
        table.menu th {
          width: auto !important;
          display: inline-block !important;
        }
        table.menu.vertical td,
        table.menu.vertical th,
        table.menu.small-vertical td,
        table.menu.small-vertical th {
          display: block !important;
        }
        table.menu[align="center"] {
          width: auto !important;
        }
        table.button.expand {
          width: 100% !important;
        }
      }
      @media only screen and (max-width: 596px) {
        .day-box {
          padding-top: 2vw !important;
          width: 14vw !important;
          height: 14vw !important;
        }
        .icon {
          margin-right: 0.5vw;
          width: 8px !important;
        }
        .icon-container {
          height: 25%;
        }
        .exp-day-label {
          margin-top: 0% !important;
          font-size: 15px;
        }
        .exp-calendar-content {
          min-width: 320px;
          height: 14vw;
        }
      }
      @media only screen and (min-width: 596px) {
        .exp-calendar-content {
          margin-left: auto;
          margin-right: auto;
          width: 78 * 7 + 8;
          height: 78;
        }
        .icon-container {
          height: 35px;
        }
      }
      @media only screen and (max-width: 596px) {
        .calendar-content {
          padding: 0px !important;
          width: 288px !important;
        }
        .not-available-day,
        .calendar-today,
        .available-day {
          height: 40px !important;
          width: 40px !important;
        }
        .day-label {
          margin-left: 10% !important;
          margin-top: 0% !important;
          font-size: 15px;
        }
      }
      .gmailfix {
        display: none;
        display: none !important;
      }
    </style>
    <meta name="filler" content="        _      _           _      " />
    <meta name="filler" content="       (_)    | |         | |     " />
    <meta name="filler" content="   __ _ _ _ __| |__  _ __ | |__   " />
    <meta name="filler" content="  / _' | | '__| '_ \| '_ \| '_ \  " />
    <meta name="filler" content=" | (_| | | |  | |_) | | | | |_) | " />
    <meta name="filler" content="  \__,_|_|_|  |_.__/|_| |_|_.__/  " />
    <meta name="filler" content="                                  " />
    <img
      class="tracking"
      
      style="
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
        width: auto;
        max-width: 100%;
        clear: both;
        display: block;
        display: none;
      "
    />
    <img
      class="tracking"
      src="https://pixel.monitor1.returnpath.net/pixel.gif?r=d18944536895e922f0e7423fe24e51aff6f2b008"
      width="1"
      height="1"
      style="
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
        width: auto;
        max-width: 100%;
        clear: both;
        display: block;
      "
    />
    <table
      dir="ltr"
      class="body"
      style="
        border-spacing: 0;
        border-collapse: collapse;
        vertical-align: top;
        hyphens: none;
        -moz-hyphens: none;
        -webkit-hyphens: none;
        -ms-hyphens: none;
        background: #f3f3f3;
        height: 100%;
        width: 100%;
        color: #0a0a0a;
        font-family: 'Cereal', Helvetica, Arial, sans-serif;
        font-weight: normal;
        padding: 0;
        margin: 0;
        text-align: left;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 0px !important;
        background-color: white;
      "
    >
      <tr style="padding: 0; vertical-align: top; text-align: left">
        <td
          class="center"
          align="center"
          valign="top"
          style="
            word-wrap: break-word;
            -webkit-hyphens: auto;
            -moz-hyphens: auto;
            hyphens: auto;
            vertical-align: top;
            color: #0a0a0a;
            font-family: 'Cereal', Helvetica, Arial, sans-serif;
            font-weight: normal;
            padding: 0;
            margin: 0;
            text-align: left;
            font-size: 16px;
            line-height: 19px;
            border-collapse: collapse !important;
          "
        >
          <center style="width: 100%; min-width: 580px">
            <!--[if mso]>
                  <table class="container" width="580">
                <![endif]-->

            <!--[if !mso]>
    
     <!-- -->
            <table
              class="container"
              style="
                border-spacing: 0;
                border-collapse: collapse;
                padding: 0;
                vertical-align: top;
                background: #fefefe;
                width: 580px;
                margin: 0 auto;
                text-align: inherit;
                max-width: 580px;
              "
            >
              <!-- <![endif]-->
              <tr style="padding: 0; vertical-align: top; text-align: left">
                <td
                  style="
                    word-wrap: break-word;
                    -webkit-hyphens: auto;
                    -moz-hyphens: auto;
                    hyphens: auto;
                    vertical-align: top;
                    color: #0a0a0a;
                    font-family: 'Cereal', Helvetica, Arial, sans-serif;
                    font-weight: normal;
                    padding: 0;
                    margin: 0;
                    text-align: left;
                    font-size: 16px;
                    line-height: 19px;
                    border-collapse: collapse !important;
                  "
                >
                  <div>
                    <table
                      class="row"
                      style="
                        border-spacing: 0;
                        border-collapse: collapse;
                        vertical-align: top;
                        text-align: left;
                        padding: 0;
                        width: 100%;
                        position: relative;
                        display: table;
                      "
                    >
                      <tr
                        class=""
                        style="
                          padding: 0;
                          vertical-align: top;
                          text-align: left;
                        "
                      >
                        <th
                          class="columns first large-12 last small-12"
                          style="
                            color: #0a0a0a;
                            font-family: 'Cereal', Helvetica, Arial, sans-serif;
                            font-weight: normal;
                            padding: 0;
                            text-align: left;
                            font-size: 16px;
                            line-height: 19px;
                            margin: 0 auto;
                            padding-bottom: 16px;
                            width: 564px;
                            padding-left: 16px;
                            padding-right: 16px;
                          "
                        >
                          <a
                            href="https://www.samiriahotelytours.com"
                            style="
                              font-family: 'Cereal', Helvetica, Arial,
                                sans-serif;
                              font-weight: normal;
                              padding: 0;
                              margin: 0;
                              text-align: left;
                              line-height: 1.3;
                              color: #2199e8;
                              text-decoration: none;
                            "
                          >
                            <img
                              align="center"
                              alt="samiria"
                              class="center standard-header"
                              height="80"
                              src="https://www.samiriahotelytours.com/sht/images/logo.png"
                              style="
                                outline: none;
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                                width: auto;
                                max-width: 100%;
                                clear: both;
                                display: block;
                                border: none;
                                padding-bottom: 16px;
                                padding-top: 48px;
                                max-height: 80px;
                              "
                            />
                          </a>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <table
                      class="row"
                      style="
                        border-spacing: 0;
                        border-collapse: collapse;
                        vertical-align: top;
                        text-align: left;
                        padding: 0;
                        width: 100%;
                        position: relative;
                        display: table;
                      "
                    >
                      <tr
                        class=""
                        style="
                          padding: 0;
                          vertical-align: top;
                          text-align: left;
                        "
                      >
                        <th
                          class="columns first large-12 last small-12"
                          style="
                            color: #0a0a0a;
                            font-family: 'Cereal', Helvetica, Arial, sans-serif;
                            font-weight: normal;
                            padding: 0;
                            text-align: left;
                            font-size: 16px;
                            line-height: 19px;
                            margin: 0 auto;
                            padding-bottom: 16px;
                            width: 564px;
                            padding-left: 16px;
                            padding-right: 16px;
                          "
                        >
                          <p
                            class="headline headline-lg heavy max-width-485"
                            style="
                              padding: 0;
                              margin: 0;
                              text-align: left;
                              font-family: 'Cereal', 'Helvetica', Helvetica,
                                Arial, sans-serif;
                              max-width: 485px;
                              font-weight: 700;
                              color: #484848;
                              word-break: normal;
                              hyphens: none;
                              -moz-hyphens: none;
                              -webkit-hyphens: none;
                              -ms-hyphens: none;
                              font-size: 32px;
                              line-height: 1.3;
                              margin-bottom: 0 !important;
                            "
                          >
                            Hola ${params.fullName}!
                          </p>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div style="padding-bottom: 16px">
                    <table
                      class="row"
                      style="
                        border-spacing: 0;
                        border-collapse: collapse;
                        vertical-align: top;
                        text-align: left;
                        padding: 0;
                        width: 100%;
                        position: relative;
                        display: table;
                      "
                    >
                      <tr
                        class=""
                        style="
                          padding: 0;
                          vertical-align: top;
                          text-align: left;
                        "
                      >
                        <th
                          class="columns first large-12 last small-12"
                          style="
                            color: #0a0a0a;
                            font-family: 'Cereal', Helvetica, Arial, sans-serif;
                            font-weight: normal;
                            padding: 0;
                            text-align: left;
                            font-size: 16px;
                            line-height: 19px;
                            margin: 0 auto;
                            padding-bottom: 16px;
                            width: 564px;
                            padding-left: 16px;
                            padding-right: 16px;
                          "
                        >
                          <p
                            class="body body-lg body-link-rausch light text-left"
                            style="
                              padding: 0;
                              margin: 0;
                              font-family: 'Cereal', 'Helvetica', Helvetica,
                                Arial, sans-serif;
                              font-weight: 300;
                              color: #484848;
                              hyphens: none;
                              -moz-hyphens: none;
                              -webkit-hyphens: none;
                              -ms-hyphens: none;
                              font-size: 18px;
                              line-height: 1.4;
                              text-align: left;
                              margin-bottom: 0px !important;
                            "
                          >
                            Bienvenido a SAMIRIA HOTEL & TOURS<br />
                            <br />
                            Gracias por confiar en nostros para tu siguiente
                            visita turistica , te adjuntamos la factura
                            correspondiente 😁 <br /><br />
                            <!-- Integra envios SMS en las comunicaciones con tus clientes, informa sobre pedidos, citas, advertencias, recordatorios, autorizaciones, etc.                                                                                                                                 Tus clientes agradecerán una información útil y rápida. <br/><br/>
                                                            Te brindamos 5 SMS gratuitos, para que pruebes nuestro sistema, no dudes en contactarte con nosotros
                                                            para tu siguiente proyecto. -->
                            <br /><br />
                          </p>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div></div>
                  <div style="padding-top: 48px">
                    <table
                      class="row"
                      style="
                        border-spacing: 0;
                        border-collapse: collapse;
                        vertical-align: top;
                        text-align: left;
                        padding: 0;
                        width: 100%;
                        position: relative;
                        display: table;
                      "
                    >
                      <tr
                        class=""
                        style="
                          padding: 0;
                          vertical-align: top;
                          text-align: left;
                        "
                      >
                        <th
                          class="columns first large-12 last small-12 standard-footer-padding"
                          style="
                            color: #0a0a0a;
                            font-family: 'Cereal', Helvetica, Arial, sans-serif;
                            font-weight: normal;
                            padding: 0;
                            text-align: left;
                            font-size: 16px;
                            line-height: 19px;
                            margin: 0 auto;
                            padding-bottom: 16px;
                            width: 564px;
                            padding-left: 16px;
                            padding-right: 16px;
                          "
                        >
                          <div class="">
                            <hr
                              class="standard-footer-hr"
                              style="
                                max-width: 580px;
                                border-right: 0;
                                border-top: 0;
                                border-bottom: 1px solid #cacaca;
                                border-left: 0;
                                clear: both;
                                background-color: #dbdbdb;
                                height: 2px;
                                width: 100%;
                                border: none;
                                margin: auto;
                              "
                            />
                            <div
                              class="row-pad-bot-4"
                              style="padding-bottom: 32px"
                            ></div>
                            <p
                              class="standard-footer-text"
                              style="
                                padding: 0;
                                margin: 0;
                                text-align: left;
                                margin-bottom: 10px;
                                font-family: 'Cereal', 'Helvetica', Helvetica,
                                  Arial, sans-serif;
                                color: #9ca299;
                                font-size: 14px;
                                text-shadow: 0 1px #fff;
                                font-weight: 300;
                                line-height: 1.4;
                              "
                            ></p>

                            <p
                              class="standard-footer-text"
                              style="
                                padding: 0;
                                margin: 0;
                                text-align: left;
                                margin-bottom: 10px;
                                font-family: 'Cereal', 'Helvetica', Helvetica,
                                  Arial, sans-serif;
                                color: #9ca299;
                                font-size: 14px;
                                text-shadow: 0 1px #fff;
                                font-weight: 300;
                                line-height: 1.4;
                              "
                            >
                              powered by <a href="https://innout.pe">innout.pe</a>
                            </p>
                            <p
                              class="standard-footer-text"
                              style="
                                padding: 0;
                                margin: 0;
                                text-align: left;
                                margin-bottom: 10px;
                                font-family: 'Cereal', 'Helvetica', Helvetica,
                                  Arial, sans-serif;
                                color: #9ca299;
                                font-size: 14px;
                                text-shadow: 0 1px #fff;
                                font-weight: 300;
                                line-height: 1.4;
                              "
                            ></p>
                          </div>
                        </th>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </table>
          </center>
        </td>
      </tr>
    </table>

    <!-- Gmail on iOS will automatically increase font-size for readability -->

    <!-- http://freshinbox.com/blog/gmail-supports-displaynone-and-gmail-ios-font-fix-update/ -->
    <div
      class="gmailfix"
      style="
        white-space: nowrap;
        font: 15px courier;
        line-height: 0;
        color: white;
      "
    ></div>
    <img
      
      alt=""
      width="1"
      height="1"
      border="0"
      style="
        height: 1px !important;
        width: 1px !important;
        border-width: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      "
    />
  </body>
</html>

    
`;
};
