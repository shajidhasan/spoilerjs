<!-- Messaging App (Discord/Slack-style) -->
<div class="card overflow-hidden shadow-xl bg-[#36393f] dark:bg-[#2f3136] border-0">
	<!-- Header -->
	<div class="bg-[#202225] px-4 py-3 flex items-center gap-3 border-b border-[#2f3136]">
		<div
			class="w-10 h-10 rounded-full bg-linear-to-br from-[#5865f2] to-[#7289da] flex items-center justify-center"
		>
			<span class="text-xl">💬</span>
		</div>
		<div class="flex-1">
			<div class="font-semibold text-white text-sm"># spoiler-chat</div>
			<div class="text-xs text-[#b9bbbe]">Team discussion</div>
		</div>
		<div class="flex gap-2">
			<button class="w-8 h-8 rounded flex items-center justify-center text-[#b9bbbe]">
				<span class="text-lg">🔔</span>
			</button>
			<button class="w-8 h-8 rounded flex items-center justify-center text-[#b9bbbe]">
				<span class="text-lg">📌</span>
			</button>
		</div>
	</div>

	<!-- Messages -->
	<div class="p-4 space-y-4 min-h-[280px]">
		<!-- Message 1 -->
		<div class="flex gap-3">
			<div
				class="w-10 h-10 rounded-full bg-linear-to-br from-[#ed4245] to-[#f26b6b] flex items-center justify-center text-white font-bold text-sm shrink-0"
			>
				A
			</div>
			<div class="flex-1 min-w-0">
				<div class="flex items-baseline gap-2 mb-1">
					<span class="font-semibold text-white text-sm">Alex</span>
					<span class="text-xs text-[#72767d]">Today at 2:34 PM</span>
				</div>
				<div class="text-[#dcddde] text-sm leading-relaxed">
					Just finished the season finale! <spoiler-span
						>The twist with the villain being the hero's brother was insane!</spoiler-span
					> 🤯
				</div>
			</div>
		</div>

		<!-- Message 2 -->
		<div class="flex gap-3">
			<div
				class="w-10 h-10 rounded-full bg-linear-to-br from-[#57f287] to-[#3ba55d] flex items-center justify-center text-white font-bold text-sm shrink-0"
			>
				S
			</div>
			<div class="flex-1 min-w-0">
				<div class="flex items-baseline gap-2 mb-1">
					<span class="font-semibold text-white text-sm">Sarah</span>
					<span class="text-xs text-[#72767d]">Today at 2:35 PM</span>
				</div>
				<div class="text-[#dcddde] text-sm leading-relaxed">
					Thanks for using spoiler tags! I'm only on episode 3 😅
				</div>
			</div>
		</div>

		<!-- Message 3 -->
		<div class="flex gap-3">
			<div
				class="w-10 h-10 rounded-full bg-linear-to-br from-[#fee75c] to-[#faa81a] flex items-center justify-center text-white font-bold text-sm shrink-0"
			>
				M
			</div>
			<div class="flex-1 min-w-0">
				<div class="flex items-baseline gap-2 mb-1">
					<span class="font-semibold text-white text-sm">Mike</span>
					<span class="text-xs text-[#72767d]">Today at 2:36 PM</span>
				</div>
				<div class="text-[#dcddde] text-sm leading-relaxed">
					No worries! Click to reveal when you're ready 👍
				</div>
			</div>
		</div>
	</div>
</div>
