import React from "react";
import { CountryCode } from "../../data/countries";

function ZohoBannerForm() {
  return (
    <>
      <div
        id="crmWebToEntityForm"
        class="zcwf_lblLeft crmWebToEntityForm"
        style={{
          backgroundColor: "#ffffffbf",
          color: "black",
          // maxWidth: "420px",
          maxWidth: "100%",
        }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'> */}
        <form
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name={`WebToLeads5200448000001276014`}
          method="POST"
          onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5200448000001276014()'
          accept-charset="UTF-8"
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="xnQsjsdp"
            value="22c852729e96c7ad7066616f422dead1bdebdf45daecdbff6851ba9bb4bbd4a6"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: "none" }}
            name="xmIwtLD"
            value="d3e32f7b53c1c7240f0dcd5fb75b7203e6302e7c8c8ea4bfc0195a6e03791634"
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="returnURL"
            value="https&#x3a;&#x2f;&#x2f;luxembourg-event.rozellarealestate.com&#x2f;thankyou.html"
          />
          <div class="zcwf_title" style={{ maxWidth: "600px", color: "black" }}>
            Rozella Real Estate
          </div>
          <div class="zcwf_row">
            <div
              class="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "'Arial'" }}
            >
              <label for="Last_Name">
                Name<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div class="zcwf_col_fld">
              <input
                type="text"
                id="Last_Name"
                name="Last Name"
                maxlength="80"
              />
              <div class="zcwf_col_help"></div>
            </div>
          </div>
          <div class="zcwf_row wfrm_fld_dpNn" style={{ display: "none" }}>
            <div
              class="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "'Arial'" }}
            >
              <label for="Lead_Source">Lead Source</label>
            </div>
            <div class="zcwf_col_fld">
              <select
                class="zcwf_col_fld_slt"
                id="Lead_Source"
                name="Lead Source"
              >
                <option value="-None-">-None-</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Chat">Chat</option>
                <option value="Employee&#x20;Referral">
                  Employee Referral
                </option>
                <option value="Event">Event</option>
                <option value="External&#x20;&#x2f;Third-Party&#x20;Referral">
                  External &#x2f;Third-Party Referral
                </option>
                <option value="Facebook">Facebook</option>
                <option value="Google">Google</option>
                <option value="Inbound&#x20;Lead">Inbound Lead</option>
                <option selected value="Landing&#x20;Page">
                  Landing Page
                </option>
                <option value="Outbound&#x20;&#x2f;&#x20;Cold&#x20;Call">
                  Outbound &#x2f; Cold Call
                </option>
                <option value="Sales&#x20;Email&#x20;Alias">
                  Sales Email Alias
                </option>
                <option value="Social&#x20;Media">Social Media</option>
                <option value="Trade&#x20;Show&#x20;&#x2f;&#x20;Exhibition">
                  Trade Show &#x2f; Exhibition
                </option>
                <option value="Twitter">Twitter</option>
                <option value="Website">Website</option>
              </select>
              <div class="zcwf_col_help"></div>
            </div>
          </div>
          <div class="zcwf_row">
            <div
              class="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "'Arial'" }}
            >
              <label for="Email">
                Email<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div class="zcwf_col_fld">
              <input
                type="text"
                ftype="email"
                id="Email"
                name="Email"
                maxlength="100"
              />
              <div class="zcwf_col_help"></div>
            </div>
          </div>
          {/* <div class="zcwf_row">
            <div
              class="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "'Arial'" }}
            >
              <label for="LEADCF7">
                Country Code<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div class="zcwf_col_fld">
              <input type="text" id="LEADCF7" name="LEADCF7" maxlength="255" />
              <div class="zcwf_col_help"></div>
            </div>
          </div> */}
          <div class="zcwf_row">
            <div
              class="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "'Arial'" }}
            >
              <label for="Mobile">
                Mobile<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div class="zcwf_col_fld">
              <div class="phone-wrap">
                <select
                  id="LEADCF2"
                  name="LEADCF2"
                  className="mobile_number_prefix"
                  required
                >
                  {CountryCode.map((country) => (
                    <>
                      <option value={country.dial_code}>
                        {country.dial_code}
                      </option>
                    </>
                  ))}
                </select>
                <input
                  type="text"
                  id="Mobile"
                  name="Mobile"
                  placeholder="507xxxxxx"
                  required
                />
              </div>
              {/* <input type="text" id="Mobile" name="Mobile" maxlength="30" /> */}
              <div class="zcwf_col_help"></div>
            </div>
          </div>
          <div class="zcwf_row">
            <div class="zcwf_col_lab"></div>
            <div class="zcwf_col_fld">
              <input
                type="submit"
                id="formsubmit"
                class="formsubmit zcwf_button"
                value="Submit"
                title="REGISTER"
              />
              <input
                type="reset"
                class="zcwf_button"
                name="reset"
                value="Reset"
                title="RESET"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ZohoBannerForm;
