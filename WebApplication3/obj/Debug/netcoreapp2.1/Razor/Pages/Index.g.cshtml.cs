#pragma checksum "D:\Documentos\Epicor\grid\WebApplication3\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "428fe4d7c9bcc25d12531004e1eb02dc1d2839e3"
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
#line 1 "D:\Documentos\Epicor\grid\WebApplication3\Pages\_ViewImports.cshtml"
using WebApplication3;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"428fe4d7c9bcc25d12531004e1eb02dc1d2839e3", @"/Pages/Index.cshtml")]
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
#line 3 "D:\Documentos\Epicor\grid\WebApplication3\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
            BeginContext(71, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(73, 4518, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f33313734e2a4dc69dbb70db04cf4a64", async() => {
                BeginContext(79, 4505, true);
                WriteLiteral(@"
    <div id=""dialog"" title=""Cell Settings"">
        <div>
            <label>Size</label>
            <span style=""right: 0;"">
                Length:
                <input type=""text"" class=""item_lenFT"" style=""width: 35px;""> FT
                <input type=""text"" class=""item_lenIN"" style=""width: 35px;""> IN

                Width: <input type=""text"" class=""item_w"" style=""width: 35px;""> IN
            </span>
        </div>
    </div>

    <!-- Modal -->
    <div class=""modal fade"" id=""exampleModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""exampleModalLabel"">Enter Cut Size</h5>
                    <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
");
                WriteLiteral(@"                </div>
                <div class=""modal-body"">
                    <p>Length: <input id=""lengthFT"" type=""text"" name=""lengthFT""> FT <input id=""lengthIN"" type=""text"" name=""lengthIN""> IN </p>
                    <p>Width: <input id=""widthIN"" type=""text"" name=""widthIN""> IN </p>
                </div>
                <div class=""modal-footer"">
                    <button type=""button"" class=""btn btn-secondary"" data-dismiss=""modal"">Close</button>
                    <button type=""button"" class=""btn btn-primary add-cust-cell"" href=""#add-cust-cell"" data-toggle=""modal"" data-target=""#exampleModal"">Create</button>
                </div>
            </div>
        </div>
    </div>
    <div class=""row"">
        <div id=""scale"" class=""col-md-2 border"" style=""height:700px;"">
            <p>Scale</p>
            <p>2' x 1.00""</p>
            <hr />
            <button type=""button"" class=""btn btn-primary"" data-toggle=""modal"" data-target=""#exampleModal"">Add Cut</button>
            <hr />
");
                WriteLiteral(@"            <button type=""button"" class=""btn"" style=""margin-bottom:15px;"" onclick=""changeZoom(1)"">Zoom In</button>
            <button type=""button"" class=""btn"" style=""margin-bottom:15px;"" onclick=""changeZoom(-1)"">Zoom Out</button>
            <button type=""button"" class=""btn add-horizontal-offcut"" href=""#add-horizontal-offcut"" style=""margin-bottom:15px;"">Horizontal Offcut</button>
            <button type=""button"" class=""btn add-vertical-offcut"" href=""#add-vertical-offcut"">Vertical Offcut</button>
        </div>
        <div class=""col-md-10"">
            <div class=""row"">
                <div class=""col-md-12 border"">
                    <p>SIZE: 600' X 84.0000"" ITEM: FERROFLEX STEEL REINFORCED BELT    LOT: D0118990-B    CUST: ACME MINING OF MINNESOTA, INC</p>
                    <p>REQUIRED: 2 CUTS - 80'6.0000"" X 36.0000 ****1 OF 2 ADDED ****</p>
                </div>
            </div>
            <div class=""row"">
                <div class=""col-md-12 border"" style=""height:637px;"">
       ");
                WriteLiteral(@"             <div class='ruler-horizontal'>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                    </div>
                    <div class='ruler-vertical'>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                        <div class='in'></div>
                    </div>
                    <div class=""grid-container"">
                        <ul id=""grid"" class=""grid"">
                            <li class=""position-hi");
                WriteLiteral(@"ghlight"">
                                <div class=""inner""></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type=""button"" class=""btn save"" style=""float:right;"">Save</button>
    <script async defer id=""github-bjs"" src=""https://buttons.github.io/buttons.js""></script>
");
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
            BeginContext(4591, 1026, true);
            WriteLiteral(@"


<script>

    var zoom = 10;

    function setZoom(zoom, el) {

        transformOrigin = [0, 0];
        el = el || instance.getContainer();
        var p = [""webkit"", ""moz"", ""ms"", ""o""],
            s = ""scale("" + zoom + "")"",
            oString = (transformOrigin[0] * 100) + ""% "" + (transformOrigin[1] * 100) + ""%"";

        for (var i = 0; i < p.length; i++) {
            el.style[p[i] + ""Transform""] = s;
            el.style[p[i] + ""TransformOrigin""] = oString;
        }

        el.style[""transform""] = s;
        el.style[""transformOrigin""] = oString;

    }

    //setZoom(5,document.getElementsByClassName('container')[0]);

    function showVal(a) {
        var zoomScale = Number(a) / 10;
        setZoom(zoomScale, document.getElementsByClassName('grid')[0])
    }

    function changeZoom(a) {
        zoom += a;
        var zoomScale = Number(zoom) / 10;
        console.log(zoom);
        setZoom(zoomScale, document.getElementsByClassName('grid')[0])
    }
</scrip");
            WriteLiteral("t>");
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
