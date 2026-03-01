"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Upload,
  Save,
  X,
  FileText,
  Loader2,
  ChevronDown,
  ExternalLink,
  ImageIcon,
} from "lucide-react";
import type { Blog, BlogFormData } from "@/lib/blog-types";
import { BLOG_CATEGORIES } from "@/lib/blog-types";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type View = "login" | "dashboard" | "editor";

const emptyForm: BlogFormData = {
  title: "",
  slug: "",
  description: "",
  content: "",
  image_url: "",
  category: "Guides",
  author: "Playzor Team",
  read_time: "5 min read",
  published: false,
};

export default function AdminPanel() {
  const [view, setView] = useState<View>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<BlogFormData>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if already authenticated
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/blogs");
        if (res.ok) {
          setView("dashboard");
        }
      } catch {
        // Not authenticated
      } finally {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, []);

  const showMessage = useCallback(
    (type: "success" | "error", text: string) => {
      setMessage({ type, text });
      setTimeout(() => setMessage(null), 4000);
    },
    []
  );

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      } else {
        setView("login");
      }
    } catch {
      showMessage("error", "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  }, [showMessage]);

  useEffect(() => {
    if (view === "dashboard") {
      fetchBlogs();
    }
  }, [view, fetchBlogs]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setView("dashboard");
        setUsername("");
        setPassword("");
      } else {
        const data = await res.json();
        setLoginError(data.error || "Invalid credentials");
      }
    } catch {
      setLoginError("Connection failed. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    setView("login");
    setBlogs([]);
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: editingId ? prev.slug : generateSlug(title),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setForm((prev) => ({ ...prev, image_url: data.url }));
        showMessage("success", "Image uploaded successfully");
      } else {
        const data = await res.json();
        showMessage("error", data.error || "Upload failed");
      }
    } catch {
      showMessage("error", "Failed to upload image");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.description || !form.content) {
      showMessage("error", "Please fill in all required fields");
      return;
    }

    setSaving(true);
    try {
      const url = editingId
        ? `/api/admin/blogs/${editingId}`
        : "/api/admin/blogs";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        showMessage(
          "success",
          editingId ? "Blog updated successfully" : "Blog created successfully"
        );
        setView("dashboard");
        setForm(emptyForm);
        setEditingId(null);
      } else {
        const data = await res.json();
        showMessage("error", data.error || "Failed to save blog");
      }
    } catch {
      showMessage("error", "Failed to save blog");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (blog: Blog) => {
    setForm({
      title: blog.title,
      slug: blog.slug,
      description: blog.description,
      content: blog.content,
      image_url: blog.image_url || "",
      category: blog.category,
      author: blog.author,
      read_time: blog.read_time,
      published: blog.published,
    });
    setEditingId(blog.id);
    setView("editor");
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        showMessage("success", "Blog deleted successfully");
        fetchBlogs();
      } else {
        showMessage("error", "Failed to delete blog");
      }
    } catch {
      showMessage("error", "Failed to delete blog");
    } finally {
      setDeleteConfirm(null);
    }
  };

  const handleNewPost = () => {
    setForm(emptyForm);
    setEditingId(null);
    setView("editor");
  };

  // Loading check
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  // =====================
  // LOGIN VIEW
  // =====================
  if (view === "login") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Playzor Admin</h1>
            <p className="text-zinc-500 text-sm mt-1">
              Blog Management Panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-zinc-400 text-sm mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Enter username"
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-zinc-400 text-sm mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Enter password"
                required
                autoComplete="current-password"
              />
            </div>

            {loginError && (
              <p className="text-red-400 text-sm text-center">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-white text-black font-semibold rounded-xl py-3 text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loginLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // =====================
  // EDITOR VIEW
  // =====================
  if (view === "editor") {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Toast */}
        {message && (
          <div
            className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-2xl ${
              message.type === "success"
                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Header */}
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setView("dashboard");
                setForm(emptyForm);
                setEditingId(null);
              }}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>

            <h2 className="text-sm font-medium text-zinc-300">
              {editingId ? "Edit Post" : "New Post"}
            </h2>

            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-white text-black font-semibold rounded-lg px-4 py-2 text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Getting Started with Minecraft Server Hosting"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Slug <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors font-mono"
                  placeholder="getting-started-with-minecraft-server-hosting"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Brief description for SEO and preview..."
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-zinc-400 text-sm">
                    Content (Markdown) <span className="text-red-400">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPreview(p => !p)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      showPreview
                        ? "bg-white text-black"
                        : "bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {showPreview ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {showPreview ? "Edit" : "Preview"}
                  </button>
                </div>

                {showPreview ? (
                  <div className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-5 min-h-[500px] overflow-y-auto">
                    {form.content ? (
                      <MarkdownRenderer content={form.content} />
                    ) : (
                      <p className="text-zinc-600 text-sm">Nothing to preview yet. Write some content first.</p>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <button
                        type="button"
                        onClick={() => {
                          const ta = document.getElementById('content-editor') as HTMLTextAreaElement;
                          if (ta) {
                            const start = ta.selectionStart;
                            const end = ta.selectionEnd;
                            const sel = ta.value.substring(start, end);
                            const before = ta.value.substring(0, start);
                            const after = ta.value.substring(end);
                            setForm(prev => ({ ...prev, content: before + '**' + (sel || 'bold') + '**' + after }));
                          }
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs font-bold transition-colors"
                        title="Bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const ta = document.getElementById('content-editor') as HTMLTextAreaElement;
                          if (ta) {
                            const start = ta.selectionStart;
                            const end = ta.selectionEnd;
                            const sel = ta.value.substring(start, end);
                            const before = ta.value.substring(0, start);
                            const after = ta.value.substring(end);
                            setForm(prev => ({ ...prev, content: before + '*' + (sel || 'italic') + '*' + after }));
                          }
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs italic transition-colors"
                        title="Italic"
                      >
                        I
                      </button>
                      <div className="w-px h-5 bg-white/10" />
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n## Heading\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Heading"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n### Subheading\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Subheading"
                      >
                        H3
                      </button>
                      <div className="w-px h-5 bg-white/10" />
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n- Item 1\n- Item 2\n- Item 3\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="List"
                      >
                        List
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n1. First\n2. Second\n3. Third\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Numbered List"
                      >
                        1.2.3
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n> Blockquote\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Quote"
                      >
                        Quote
                      </button>
                      <div className="w-px h-5 bg-white/10" />
                      <button
                        type="button"
                        onClick={() => {
                          const url = prompt('Enter URL:');
                          const text = prompt('Enter link text:') || 'Click here';
                          if (url) setForm(prev => ({ ...prev, content: prev.content + `[${text}](${url})` }));
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Insert Link"
                      >
                        Link
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n![Alt text](image-url)\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Image"
                      >
                        Img
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n```\ncode block\n```\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                        title="Code Block"
                      >
                        {'<>'}
                      </button>
                      <div className="w-px h-5 bg-white/10" />
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n---\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Horizontal Rule / Separator"
                      >
                        Line
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, content: prev.content + '\n&nbsp;\n' }))}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white text-xs transition-colors"
                        title="Add Extra Space"
                      >
                        Space
                      </button>
                    </div>
                    <textarea
                      id="content-editor"
                      value={form.content}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, content: e.target.value }))
                      }
                      rows={24}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-y font-mono leading-relaxed whitespace-pre-wrap"
                      placeholder={`## Getting Started\n\nWrite your blog content here using **Markdown**...\n\nSingle Enter = line break\nDouble Enter = new paragraph\n\n### Tips\n\n- Use **bold** and *italic* for emphasis\n- Add [links](https://example.com) easily\n- Insert images with ![alt](url)\n\n> Pro tip: Click Preview to see how it looks!`}
                    />
                    <p className="text-zinc-600 text-xs mt-1.5">
                      Single Enter = line break, Double Enter = new paragraph. Supports: **bold**, *italic*, ## headings, - lists, [links](url), ![images](url), {'>'} quotes, ```code```, ---separator, tables, HTML
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Featured Image */}
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <label className="block text-zinc-400 text-sm mb-3">
                  Featured Image
                </label>

                {form.image_url ? (
                  <div className="relative mb-3">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src={form.image_url}
                        alt="Preview"
                        fill
                        className="object-cover"
                        sizes="300px"
                      />
                    </div>
                    <button
                      onClick={() =>
                        setForm((prev) => ({ ...prev, image_url: "" }))
                      }
                      className="absolute top-2 right-2 bg-black/60 rounded-full p-1.5 hover:bg-black/80 transition-colors"
                    >
                      <X className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg border-2 border-dashed border-white/10 flex flex-col items-center justify-center mb-3">
                    <ImageIcon className="w-8 h-8 text-zinc-600 mb-2" />
                    <p className="text-zinc-600 text-xs">No image selected</p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-800 border border-white/10 rounded-lg py-2.5 text-sm text-zinc-300 hover:text-white hover:border-white/20 transition-colors disabled:opacity-50"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Upload Image
                    </>
                  )}
                </button>

                <div className="mt-3">
                  <input
                    type="text"
                    value={form.image_url}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, image_url: e.target.value }))
                    }
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-white/30 transition-colors font-mono"
                    placeholder="Or paste image URL..."
                  />
                </div>
              </div>

              {/* Settings */}
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className="w-full appearance-none bg-zinc-800 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors pr-8"
                    >
                      {BLOG_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5">
                    Author
                  </label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, author: e.target.value }))
                    }
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={form.read_time}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        read_time: e.target.value,
                      }))
                    }
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="5 min read"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div>
                    <p className="text-sm text-white font-medium">Published</p>
                    <p className="text-xs text-zinc-500">
                      Make visible on blog
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        published: !prev.published,
                      }))
                    }
                    className={`relative w-11 h-6 rounded-full transition-colors ${
                      form.published ? "bg-emerald-500" : "bg-zinc-700"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        form.published ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =====================
  // DASHBOARD VIEW
  // =====================
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Toast */}
      {message && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-2xl ${
            message.type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-white font-semibold text-lg mb-2">
              Delete Post
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 bg-zinc-800 border border-white/10 text-white rounded-lg py-2.5 text-sm hover:bg-zinc-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg py-2.5 text-sm hover:bg-red-500/20 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-sm">
                Playzor Admin
              </h1>
              <p className="text-zinc-500 text-xs">Blog Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleNewPost}
              className="flex items-center gap-2 bg-white text-black font-semibold rounded-lg px-4 py-2 text-sm hover:bg-zinc-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Post
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm border border-white/10 rounded-lg px-3 py-2"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
            <p className="text-zinc-500 text-xs mb-1">Total Posts</p>
            <p className="text-white text-2xl font-bold">{blogs.length}</p>
          </div>
          <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
            <p className="text-zinc-500 text-xs mb-1">Published</p>
            <p className="text-emerald-400 text-2xl font-bold">
              {blogs.filter((b) => b.published).length}
            </p>
          </div>
          <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
            <p className="text-zinc-500 text-xs mb-1">Drafts</p>
            <p className="text-amber-400 text-2xl font-bold">
              {blogs.filter((b) => !b.published).length}
            </p>
          </div>
          <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
            <p className="text-zinc-500 text-xs mb-1">Categories</p>
            <p className="text-white text-2xl font-bold">
              {new Set(blogs.map((b) => b.category)).size}
            </p>
          </div>
        </div>

        {/* Blog List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">
              No posts yet
            </h3>
            <p className="text-zinc-500 text-sm mb-6">
              Create your first blog post to get started.
            </p>
            <button
              onClick={handleNewPost}
              className="inline-flex items-center gap-2 bg-white text-black font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-zinc-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create First Post
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-zinc-900 border border-white/5 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-white/10 transition-colors"
              >
                {/* Thumbnail */}
                {blog.image_url ? (
                  <div className="relative w-full sm:w-20 h-32 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <Image
                      src={blog.image_url}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div className="w-full sm:w-20 h-32 sm:h-14 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-zinc-600" />
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium text-sm truncate">
                      {blog.title}
                    </h3>
                    {blog.published ? (
                      <span className="flex items-center gap-1 text-emerald-400 text-xs flex-shrink-0">
                        <Eye className="w-3 h-3" />
                        Live
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-amber-400 text-xs flex-shrink-0">
                        <EyeOff className="w-3 h-3" />
                        Draft
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 text-xs truncate">
                    {blog.category} &middot; {blog.author} &middot;{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
                  {blog.published && (
                    <a
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                      title="View"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(blog.id)}
                    className="p-2 rounded-lg bg-zinc-800 border border-white/10 text-zinc-400 hover:text-red-400 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
