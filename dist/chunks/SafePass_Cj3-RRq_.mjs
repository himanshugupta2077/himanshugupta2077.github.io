import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>SafePass is an offline password manager written in Python with Tkinter. This application allows you to store all your passwords inside a single database collection, MongoDB, which is secured with the SHA 256 hashing function. The hash key and salt are stored in the system’s keyring to cross-check with the entered password. The user can add passwords and other necessary fields (Title, URL, Username, Password, Notes).</p>";

				const frontmatter = {"title":"SafePass","description":"An open-source, lightweight, and easy-to-use password manager that saves your password locally.","pubDate":"Dec 03 2021","heroImage":{"url":"/1.png","alt":"GitHub wallpaper"},"platform":"Desktop (Linux)","stack":["Python","Tkinter","MongoDB"],"github":"https://github.com/himanshugupta2077/SafePass","minutesRead":"1 min read"};
				const file = "/home/dev/himanshugupta2077.github.io/src/content/project/SafePass.md";
				const url = undefined;
				function rawContent() {
					return "\nSafePass is an offline password manager written in Python with Tkinter. This application allows you to store all your passwords inside a single database collection, MongoDB, which is secured with the SHA 256 hashing function. The hash key and salt are stored in the system's keyring to cross-check with the entered password. The user can add passwords and other necessary fields (Title, URL, Username, Password, Notes).";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
