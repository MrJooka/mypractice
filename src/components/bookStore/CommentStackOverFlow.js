import React, { Component, PureComponent } from "react";

class CommentStackOverFlow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: "100%", padding: "16px 0 16px 0", borderBottom: "1px solid #e4e6e8" }}>
        <div className="post-layout" style={{ display: "grid", gridTemplateColumns: "max-content 1fr" }}>
          <div className="votecell post-layout--left" style={{ width: "auto", paddingRight: "16px", verticalAlign: "top", gridColumn: 1 }}>
            <div className="js-voting-container" style={{ color: "rgb(187, 192, 196)", flexDirection: "column", justifyContent: "center", alignItems: "stretch", display: "flex", margin: "-2px" }}>
              <button
                className="js-vote-up-btn"
                style={{
                  position: "relative",
                  display: "inline-block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 0,
                  border: "none",
                  outline: "none",
                  font: "unset",
                  borderRadius: 0,
                  color: "unset",
                  background: "none",
                  boxShadow: "none",
                  margin: "2px",
                }}
              >
                <svg aria-hidden="true" className="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36" style={{ margin: 0, verticalAlign: "bottom" }}>
                  <path d="M2 26h32L18 10 2 26z" style={{ fill: "currentColor" }}></path>
                </svg>
              </button>

              <div className="js-vote-count" style={{ color: "rgb(106, 115, 124)", flexDirection: "column", alignItems: "center", display: "flex", fontSize: "1.6rem", margin: "2px" }}>
                4292
              </div>
              <button
                className="js-vote-down-btn "
                style={{
                  position: "relative",
                  display: "inline-block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 0,
                  border: "none",
                  outline: "none",
                  font: "unset",
                  borderRadius: 0,
                  color: "unset",
                  background: "none",
                  boxShadow: "none",
                  margin: "2px",
                }}
              >
                <svg aria-hidden="true" className="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36" style={{ margin: 0, verticalAlign: "bottom" }}>
                  <path d="M2 10h32L18 26 2 10z" style={{ fill: "currentColor" }}></path>
                </svg>
              </button>

              <div className="js-accepted-answer-indicator" style={{ color: "#48a868", marginTop: "-8px", paddingTop: "6px", paddingBottom: "6px", margin: "2px" }}>
                <div className="ta-center" style={{ textAlign: "center" }}>
                  <svg aria-hidden="true" className="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36" style={{ verticalAlign: "bottom" }}>
                    <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z" style={{ fill: "currentColor" }}></path>
                  </svg>
                </div>
              </div>

              <a
                className="js-post-issue"
                href="/"
                style={{ paddingBottom: "6px", cursor: "pointer", position: "relative", display: "inline", textAlign: "center", textDecoration: "none", margin: "2px auto", paddingTop: "6px" }}
              >
                <svg aria-hidden="true" className="mln2 mr0 svg-icon iconHistory" width="19" height="18" viewBox="0 0 19 18" style={{ marginLeft: "-2px", verticalAlign: "bottom" }}>
                  <path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z" style={{ fill: "rgb(187, 192, 196)" }}></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="answercell post-layout--right" style={{ paddingRight: "16px", gridColumn: 2, width: "auto", minWidth: 0 }}>
            <div className="s-prose js-post-body" style={{ fontSize: "15px", lineHeight: 1.5, wordWrap: "break-word", width: "100%" }}>
              <p style={{ clear: "both", marginBottom: "1.1em" }}>
                <strong style={{ fontWeight: "bold" }}>Branch prediction.</strong>
              </p>
              <p>
                With a sorted array, the condition data[c] = 128 is first false for a streak of values, then becomes true for all later values. That's easy to predict. With an unsorted array, you pay
                for the branching cost.
              </p>
            </div>
            <div className="mt24" style={{ marginTop: "24px" }}>
              <div className="grid" style={{ flexWrap: "wrap", justifyContent: "flex-end", alignItems: "flex-start", display: "flex", margin: "-4px 0 -4px 0" }}>
                <div className="grid--cell mr16" style={{ flex: "1 1 100px", margin: "4px 16px 4px 0" }}>
                  <div className="js-post-menu" style={{ paddingTop: "2px" }}>
                    <div className="grid d-flex gs8" style={{ display: "flex", flexWrap: "wrap", margin: "-4px" }}>
                      <div className="grid--cell" style={{ margin: "4px" }}>
                        <a href="/" rel="nofollow" className="js-share-link js-gps-track" title="Short permalink to this answer" style={{ fontSize: "13px", textDecoration: "none", color: "#6a737c" }}>
                          Reply
                        </a>
                      </div>
                      <div className="grid--cell" style={{ margin: "4px" }}>
                        <a href="/" className="js-suggest-edit-post" style={{ fontSize: "13px", textDecoration: "none", color: "#6a737c" }}>
                          Edit
                        </a>
                      </div>
                      <div className="grid--cell" style={{ margin: "4px" }}>
                        <button
                          type="button"
                          style={{
                            display: "inline",
                            padding: 0,
                            border: "none",
                            outline: "none",
                            borderRadius: 0,
                            fontSize: "13px",
                            background: "none",
                            boxShadow: "none",
                            textAlign: "inherit",
                            textDecoration: "none",
                            color: "#6a737c",
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="js-menu-popup-container"></div>
                  </div>
                </div>
                <div className="post-signature" style={{ flex: "0 auto", width: "200px", verticalAlign: "top", textAlign: "left", margin: "4px 0 4px 0" }}>
                  <div className="user-info" style={{ boxSizing: "border-box", padding: "5px 6px 7px 7px", columns: "#6a737c" }}>
                    <div className="user-action-time" style={{ marginTop: "1px", marginBottom: "4px", fontSize: "12px", whiteSpace: "nowrap" }}>
                      <a href="/" title="show all edits to this post" className="js-gps-track" style={{ color: "#0077cc", textDecoration: "none", cursor: "pointer" }}>
                        edited
                        <span title="2020-06-20 09:12:55Z" className="relativetime" style={{ textDecoration: "none" }}>
                          Jun 20 '20 at 9:12
                        </span>
                      </a>
                    </div>
                    <div className="user-gravatar32" style={{ float: "left", width: "32px", height: "32px", borderRadius: "1px" }}>
                      <a href="/users/-1/community" style={{ textDecoration: "none" }}>
                        <div className="gravatar-wrapper-32" style={{ width: "32px", height: "32px", overflow: "hidden" }}>
                          <img
                            src="https://www.gravatar.com/avatar/a007be5a61f6aa8f3e85ae2fc18dd66e?s=32&amp;d=identicon&amp;r=PG"
                            alt=""
                            width="32"
                            height="32"
                            className="bar-sm"
                            style={{ borderRadius: "3px", margin: "0 auto" }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="user-details" style={{ wordWrap: "break-word", lineHeight: "17px", float: "left", width: "calc(100% - 40px)", marginLeft: "8px" }}>
                      <a href="/users/-1/community" style={{ textDecoration: "none", cursor: "pointer", color: "#0077cc" }}>
                        Community
                      </a>
                      <span className="mod-flair" title="moderator" style={{ marginLeft: "3px", fontWeight: "bold", fontSize: "15px", lineHeight: 1, color: "#0077cc" }}>
                        ♦
                      </span>
                      <div className="-flair" style={{ color: "#6a737c" }}>
                        <span className="reputation-score" title="reputation score " dir="ltr" style={{ fontWeight: "bold", fontSize: "12px", marginRight: "2px" }}>
                          1
                        </span>
                        <span title="1 silver badge" aria-hidden="true" style={{ marginRight: "3px", marginLeft: "2px" }}>
                          <span className="badge2" style={{ marginRight: "3px", marginLeft: "2px", width: "6px", fontSize: "1px" }}>
                            {" "}
                            ●
                          </span>
                          <span className="badgecount" style={{ fontWeight: 400, fontSize: "12px", color: "#848d95" }}>
                            1
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-signature" style={{ textAlign: "left", verticalAlign: "top", width: "200px", margin: "4px 0 4px 0", flex: "0 auto" }}>
                  <div className="user-info" style={{ boxSizing: "border-box", padding: "5px 6px 7px 7px", color: "#6a737c" }}>
                    <div className="user-action-time" style={{ marginTop: "1px", marginBottom: "4px", fontSize: "12px", whiteSpace: "nowrap" }}>
                      answered{" "}
                      <span title="2012-06-27 13:54:45Z" className="relativetime" style={{ textDecoration: "none" }}>
                        Jun 27 '12 at 13:54
                      </span>
                    </div>
                    <div className="user-gravatar32" style={{ float: "left", width: "32px", height: "32px", borderRadius: "1px" }}>
                      <a href="/users/1011995/daniel-fischer" style={{ textDecoration: "none" }}>
                        <div className="gravatar-wrapper-32" style={{ width: "32px", height: "32px", overflow: "hidden" }}>
                          <img src="https://i.stack.imgur.com/Jca5Q.jpg?s=32&amp,=1" alt="" width="32" height="32" className="bar-sm" style={{ margin: "0 auto", borderRadius: "3px" }} />
                        </div>
                      </a>
                    </div>
                    <div className="user-details" style={{ wordWrap: "break-word", lineHeight: "17px", float: "left", width: "calc(100% - 40px)", marginLeft: "8px" }}>
                      <a href="/" style={{ textDecoration: "none", color: "#0077cc" }}>
                        Daniel Fischer
                      </a>
                      <div className="-flair">
                        <span className="reputation-score" title="reputation score 174,447" dir="ltr" style={{ fontWeight: "bold", fontSize: "12px", marginRight: "2px" }}>
                          174k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="post-layout--right js-post-comments-component" style={{ paddingRight: "16px", gridColumn: 2, width: "auto", minWidth: 0 }}>
            <div
              id="comments-11227877"
              className="comments js-comments-container"
              style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "#e4e6e8", marginTop: "12px", paddingBottom: "10px", width: "100%", textAlign: "left" }}
            >
              <ul className="comments-list" style={{ listStyle: "none", display: "grid", gridTemplateColumns: "max-content 1fr", listStyleType: "none", margin: 0, padding: 0 }}>
                <li className="comment" style={{ display: "contents" }}>
                  <div
                    className="js-comment-actions comment-actions"
                    style={{
                      borderBottom: "1px solid #eff0f1",
                      padding: "6px 0",
                      paddingRight: "2px",
                      flexShrink: 0,
                      display: "grid",
                      alignContent: "flex-start",
                      gridTemplateColumns: "repeat(2, max-content)",
                    }}
                  >
                    <div className="comment-score js-comment-edit-hide" style={{ paddingRight: "4px", display: "inline-block", minWidth: "16px", width: "auto" }}>
                      <span className="supernova" style={{ color: "#f48024", fontWeight: "normal", fontSize: "13px", float: "none", minWidth: 0 }}>
                        131
                      </span>
                    </div>
                  </div>
                  <div
                    className="comment-text js-comment-text-and-form"
                    style={{ verticalAlign: "text-top", lineHeight: 1.3, fontSize: "13px", flexGrow: 1, borderBottom: "1px solid #eff0f1", padding: "6px", minWidth: 0, flexBasis: 0 }}
                  >
                    <div className="comment-body js-comment-edit-hide" style={{ wordWrap: "break-word" }}>
                      <span className="comment-copy">
                        Does branch prediction work better on sorted arrays vs. arrays with different patterns? For example, for the array the next element in the array from the pattern is 80. Would
                        this kind of array be sped up by branch prediction in which the next element is 80 here if the pattern is followed? Or does it usually only help with sorted arrays?
                      </span>
                      <a href="/" className="comment-user" style={{ whiteSpace: "nowrap", textDecoration: "none", color: "#0077cc" }}>
                        Adam Freeman
                      </a>
                      <span className="comment-date" dir="ltr" style={{ borderBottom: "none", color: "#9199a1" }}>
                        <a className="comment-link" href="/" style={{ textDecoration: "none", borderBottom: "none", color: "#9199a1" }}>
                          <span title="2014-09-23 18:58:12Z, License: CC BY-SA 3.0" className="relativetime-clean">
                            Sep 23 '14 at 18:58
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment" style={{ display: "contents" }}>
                  <div
                    className="js-comment-actions comment-actions"
                    style={{
                      borderBottom: "1px solid #eff0f1",
                      padding: "6px 0",
                      paddingRight: "2px",
                      flexShrink: 0,
                      display: "grid",
                      alignContent: "flex-start",
                      gridTemplateColumns: "repeat(2, max-content)",
                    }}
                  >
                    <div className="comment-score js-comment-edit-hide" style={{ paddingRight: "4px", display: "inline-block", minWidth: "16px", width: "auto" }}>
                      <span className="supernova" style={{ color: "#f48024", fontWeight: "normal", fontSize: "13px", float: "none", minWidth: 0 }}>
                        131
                      </span>
                    </div>
                  </div>
                  <div
                    className="comment-text js-comment-text-and-form"
                    style={{ verticalAlign: "text-top", lineHeight: 1.3, fontSize: "13px", flexGrow: 1, borderBottom: "1px solid #eff0f1", padding: "6px", minWidth: 0, flexBasis: 0 }}
                  >
                    <div className="comment-body js-comment-edit-hide" style={{ wordWrap: "break-word" }}>
                      <span className="comment-copy">
                        Does branch prediction work better on sorted arrays vs. arrays with different patterns? For example, for the array the next element in the array from the pattern is 80. Would
                        this kind of array be sped up by branch prediction in which the next element is 80 here if the pattern is followed? Or does it usually only help with sorted arrays?
                      </span>
                      <a href="/" className="comment-user" style={{ whiteSpace: "nowrap", textDecoration: "none", color: "#0077cc" }}>
                        Adam Freeman
                      </a>
                      <span className="comment-date" dir="ltr" style={{ borderBottom: "none", color: "#9199a1" }}>
                        <a className="comment-link" href="/" style={{ textDecoration: "none", borderBottom: "none", color: "#9199a1" }}>
                          <span title="2014-09-23 18:58:12Z, License: CC BY-SA 3.0" className="relativetime-clean">
                            Sep 23 '14 at 18:58
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment" style={{ display: "contents" }}>
                  <div
                    className="js-comment-actions comment-actions"
                    style={{
                      borderBottom: "1px solid #eff0f1",
                      padding: "6px 0",
                      paddingRight: "2px",
                      flexShrink: 0,
                      display: "grid",
                      alignContent: "flex-start",
                      gridTemplateColumns: "repeat(2, max-content)",
                    }}
                  >
                    <div className="comment-score js-comment-edit-hide" style={{ paddingRight: "4px", display: "inline-block", minWidth: "16px", width: "auto" }}>
                      <span className="supernova" style={{ color: "#f48024", fontWeight: "normal", fontSize: "13px", float: "none", minWidth: 0 }}>
                        131
                      </span>
                    </div>
                  </div>
                  <div
                    className="comment-text js-comment-text-and-form"
                    style={{ verticalAlign: "text-top", lineHeight: 1.3, fontSize: "13px", flexGrow: 1, borderBottom: "1px solid #eff0f1", padding: "6px", minWidth: 0, flexBasis: 0 }}
                  >
                    <div className="comment-body js-comment-edit-hide" style={{ wordWrap: "break-word" }}>
                      <span className="comment-copy">
                        Does branch prediction work better on sorted arrays vs. arrays with different patterns? For example, for the array the next element in the array from the pattern is 80. Would
                        this kind of array be sped up by branch prediction in which the next element is 80 here if the pattern is followed? Or does it usually only help with sorted arrays?
                      </span>
                      <a href="/" className="comment-user" style={{ whiteSpace: "nowrap", textDecoration: "none", color: "#0077cc" }}>
                        Adam Freeman
                      </a>
                      <span className="comment-date" dir="ltr" style={{ borderBottom: "none", color: "#9199a1" }}>
                        <a className="comment-link" href="/" style={{ textDecoration: "none", borderBottom: "none", color: "#9199a1" }}>
                          <span title="2014-09-23 18:58:12Z, License: CC BY-SA 3.0" className="relativetime-clean">
                            Sep 23 '14 at 18:58
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment" style={{ display: "contents" }}>
                  <div
                    className="js-comment-actions comment-actions"
                    style={{
                      borderBottom: "1px solid #eff0f1",
                      padding: "6px 0",
                      paddingRight: "2px",
                      flexShrink: 0,
                      display: "grid",
                      alignContent: "flex-start",
                      gridTemplateColumns: "repeat(2, max-content)",
                    }}
                  >
                    <div className="comment-score js-comment-edit-hide" style={{ paddingRight: "4px", display: "inline-block", minWidth: "16px", width: "auto" }}>
                      <span className="supernova" style={{ color: "#f48024", fontWeight: "normal", fontSize: "13px", float: "none", minWidth: 0 }}>
                        131
                      </span>
                    </div>
                  </div>
                  <div
                    className="comment-text js-comment-text-and-form"
                    style={{ verticalAlign: "text-top", lineHeight: 1.3, fontSize: "13px", flexGrow: 1, borderBottom: "1px solid #eff0f1", padding: "6px", minWidth: 0, flexBasis: 0 }}
                  >
                    <div className="comment-body js-comment-edit-hide" style={{ wordWrap: "break-word" }}>
                      <span className="comment-copy">
                        Does branch prediction work better on sorted arrays vs. arrays with different patterns? For example, for the array the next element in the array from the pattern is 80. Would
                        this kind of array be sped up by branch prediction in which the next element is 80 here if the pattern is followed? Or does it usually only help with sorted arrays?
                      </span>
                      <a href="/" className="comment-user" style={{ whiteSpace: "nowrap", textDecoration: "none", color: "#0077cc" }}>
                        Adam Freeman
                      </a>
                      <span className="comment-date" dir="ltr" style={{ borderBottom: "none", color: "#9199a1" }}>
                        <a className="comment-link" href="/" style={{ textDecoration: "none", borderBottom: "none", color: "#9199a1" }}>
                          <span title="2014-09-23 18:58:12Z, License: CC BY-SA 3.0" className="relativetime-clean">
                            Sep 23 '14 at 18:58
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment" style={{ display: "contents" }}>
                  <div
                    className="js-comment-actions comment-actions"
                    style={{
                      borderBottom: "1px solid #eff0f1",
                      padding: "6px 0",
                      paddingRight: "2px",
                      flexShrink: 0,
                      display: "grid",
                      alignContent: "flex-start",
                      gridTemplateColumns: "repeat(2, max-content)",
                    }}
                  >
                    <div className="comment-score js-comment-edit-hide" style={{ paddingRight: "4px", display: "inline-block", minWidth: "16px", width: "auto" }}>
                      <span className="supernova" style={{ color: "#f48024", fontWeight: "normal", fontSize: "13px", float: "none", minWidth: 0 }}>
                        131
                      </span>
                    </div>
                  </div>
                  <div
                    className="comment-text js-comment-text-and-form"
                    style={{ verticalAlign: "text-top", lineHeight: 1.3, fontSize: "13px", flexGrow: 1, borderBottom: "1px solid #eff0f1", padding: "6px", minWidth: 0, flexBasis: 0 }}
                  >
                    <div className="comment-body js-comment-edit-hide" style={{ wordWrap: "break-word" }}>
                      <span className="comment-copy">
                        Does branch prediction work better on sorted arrays vs. arrays with different patterns? For example, for the array the next element in the array from the pattern is 80. Would
                        this kind of array be sped up by branch prediction in which the next element is 80 here if the pattern is followed? Or does it usually only help with sorted arrays?
                      </span>
                      <a href="/" className="comment-user" style={{ whiteSpace: "nowrap", textDecoration: "none", color: "#0077cc" }}>
                        Adam Freeman
                      </a>
                      <span className="comment-date" dir="ltr" style={{ borderBottom: "none", color: "#9199a1" }}>
                        <a className="comment-link" href="/" style={{ textDecoration: "none", borderBottom: "none", color: "#9199a1" }}>
                          <span title="2014-09-23 18:58:12Z, License: CC BY-SA 3.0" className="relativetime-clean">
                            Sep 23 '14 at 18:58
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="comments-link-11227877">
              <a className="js-add-link comments-link dno" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”." href="#" role="button"></a>
              <span className="js-link-separator dno">|</span>
              <a className="js-show-link comments-link" title="Expand to show all comments on this post" href="/" role="button">
                Show <b>5</b> more comments
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentStackOverFlow;
