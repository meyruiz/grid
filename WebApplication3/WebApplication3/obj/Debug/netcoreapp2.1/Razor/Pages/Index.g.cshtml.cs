#pragma checksum "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\WebApplication3\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "25007ff663b6329fa70c88f66007fb3eebb30e6c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WebApplication3.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Index.cshtml", typeof(WebApplication3.Pages.Pages_Index), null)]
namespace WebApplication3.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\WebApplication3\Pages\_ViewImports.cshtml"
using WebApplication3;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"25007ff663b6329fa70c88f66007fb3eebb30e6c", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3c0aa44830bef36841a062868044c1fc5e79428b", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\WebApplication3\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
            BeginContext(71, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(73, 3319, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "41ca83ba1f3742179007e48ed741dc02", async() => {
                BeginContext(79, 3306, true);
                WriteLiteral(@"
    <div class=""row"">
        <div id=""scale"" class=""col-md-2 border border-dark"" style=""height:800px;"">
            <p>Scale</p>
            <p>2' x 1.00""</p>
            <hr />
            <button type=""button"" class=""btn btn-primary"">Add Cut</button>
            <hr />
            <button type=""button"" class=""btn"" style=""margin-bottom:15px;"">Zoom In</button>
            <button type=""button"" class=""btn"">Zoom Out</button>
        </div>
        <div class=""col-md-10"">
            <div class=""row"">
                <div class=""col-md-12 border border-dark"">
                    <p>SIZE: 600' X 84.0000"" ITEM: FERROFLEX STEEL REINFORCED BELT    LOT: D0118990-B    CUST: ACME MINING OF MINNESOTA, INC</p>
                    <p>REQUIRED: 2 CUTS - 80'6.0000"" X 36.0000 ****1 OF 2 ADDED ****</p>
                </div>
            </div>
            <div class=""row"" style=""height:800px;"">
                <div class=""col-md-12 border border-dark"">
                    <div class=""header"">
          ");
                WriteLiteral(@"              <a href=""#remove-row"" class=""button remove-row"">-</a>
                        <a href=""#add-row"" class=""button add-row"">+</a>
                        <p>
                            <a class=""github-button"" href=""https://github.com/hootsuite/grid"" data-style=""mega"" data-count-href=""/hootsuite/grid/stargazers"" data-count-api=""/repos/hootsuite/grid#stargazers_count"" data-count-aria-label=""# stargazers on GitHub"" aria-label=""Star hootsuite/grid on GitHub"">GitHub</a>
                        </p>
                    </div>

                    <canvas id=""example""></canvas>

                    <div class=""grid-container"">
                        <ul id=""grid"" class=""grid"">
                            <li class=""position-highlight"">
                                <div class=""inner""></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=""modal fade"" id=""exa");
                WriteLiteral(@"mpleModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""exampleModalLabel"">Enter Cut Size</h5>
                    <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                <div class=""modal-body"">
                    <p>Length: <input id=""lengthFT"" type=""text"" name=""lengthFT""> FT <input id=""lengthIN"" type=""text"" name=""lengthIN""> IN </p>
                    <p>Width: <input id=""widthIN"" type=""text"" name=""widthIN""> IN </p>
                </div>
                <div class=""modal-footer"">
                    <button type=""button"" class=""btn btn-secondary"" data-dismiss=""modal"">Close</button>
                    <button type=""button");
                WriteLiteral("\" class=\"btn btn-primary\" onclick=\"createSquare()\">Create</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <script async defer id=\"github-bjs\" src=\"https://buttons.github.io/buttons.js\"></script>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3392, 6, true);
            WriteLiteral("\r\n\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
